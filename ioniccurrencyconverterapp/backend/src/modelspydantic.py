from pydantic import BaseModel
from typing import Dict
import datetime

class MoedaConversaoResponse(BaseModel):
    moeda_base: str
    moeda_destino: str
    valor_original: float
    taxa: float
    data_hora_conversao: datetime.datetime
    valor_convertido: float

class MoedaConsultaResponse(BaseModel):
    moeda_base: str
    data_hora_consulta: datetime.datetime
    taxas: Dict[str, float]