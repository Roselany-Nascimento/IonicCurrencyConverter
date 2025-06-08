from fastapi import FastAPI
import requests
from .modelspydantic import MoedaConversaoResponse, MoedaConsultaResponse
from .modelssql import Session, Conversao, Consulta
from datetime import datetime
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)



API_KEY = "a0f079f1e2002d76885bc687"

@app.get("/")
def read_root():
    return {"message": "Olá, mundo!"}


@app.get("/converter/{moeda_base}/{moeda_destino}/{valor}", response_model=MoedaConversaoResponse)
def converter_moeda(moeda_base: str, moeda_destino: str, valor: float):

    url = f"https://v6.exchangerate-api.com/v6/{API_KEY}/pair/{moeda_base}/{moeda_destino}/{valor}"

    response = requests.get(url)
    if response.status_code != 200:
        return {"error": "Erro ao acessar a API de câmbio."}

    data = response.json()
    if data.get("result") != "success":
        return {"error": "Não foi possível obter a taxa de câmbio."}

    conversao = MoedaConversaoResponse(
        moeda_base=data["base_code"],
        moeda_destino=data["target_code"],
        valor_original=valor,
        taxa=data["conversion_rate"],
        valor_convertido=data["conversion_result"],
        data_hora_conversao=datetime.now()
    )

    return conversao


@app.get("/consultar/{moeda_base}", response_model=MoedaConsultaResponse)
def consultar_moeda(moeda_base: str):
    url = f"https://v6.exchangerate-api.com/v6/{API_KEY}/latest/{moeda_base}"

    response = requests.get(url)
    if response.status_code != 200:
        return {"error": "Erro ao acessar a API de câmbio."}

    data = response.json()
    if data.get("result") != "success":
        return {"error": "Não foi possível obter as taxas de câmbio."}

    consulta = MoedaConsultaResponse(
        moeda_base=data["base_code"],
        taxas=data["conversion_rates"],
        data_hora_consulta=datetime.now()
    )

    return consulta


@app.post("/converter/salvar")
def salvar_conversao(conversao: MoedaConversaoResponse):
    session = Session()

    nova_conversao = Conversao(
        moeda_base=conversao.moeda_base,
        moeda_destino=conversao.moeda_destino,
        valor_original=conversao.valor_original,
        taxa=conversao.taxa,
        valor_convertido=conversao.valor_convertido,
        data_hora_conversao=conversao.data_hora_conversao
    )

    session.add(nova_conversao)
    session.commit()
    session.close()

    return {"message": "Conversão salva com sucesso!"}

@app.post("/consultar/salvar")
def salvar_consulta(consulta: MoedaConsultaResponse):
    session = Session()

    nova_consulta = Consulta(
        moeda_base=consulta.moeda_base,
        taxas=consulta.taxas,
        data_hora_consulta=consulta.data_hora_consulta
    )

    session.add(nova_consulta)
    session.commit()
    session.close()

    return {"message": "Consulta salva com sucesso!"}


@app.get("/consultas", response_model=list[MoedaConsultaResponse])
def listar_consultas():
    session = Session()
    consultas = session.query(Consulta).all()
    session.close()
    return consultas

@app.get("/conversoes", response_model=list[MoedaConversaoResponse])
def listar_conversoes():
    session = Session()
    conversoes = session.query(Conversao).all()
    session.close()
    return conversoes