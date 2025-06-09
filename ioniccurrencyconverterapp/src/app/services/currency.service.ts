import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PAISES } from '../models/paises.model';

export interface ConversaoResponse {
  moeda_base : string; 
  moeda_destino : string; 
  taxa : number;
  valor_original : number;
  valor_convertido : number;
  data_hora_conversao : string;
}

export interface ConsultaResponse {
  moeda_base : string;
  taxas : { [key: string]: number };
  data_hora_consulta : string;
}

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(private http: HttpClient) {}

  paises = PAISES;


  converter(paisSelecionado: any, paisDestino: any, valor: number): Observable<ConversaoResponse> {
    if (valor === null || paisSelecionado === undefined || paisDestino === undefined) {
      throw new Error('Por favor, preencha todos os campos.');
    }
    const url = `http://localhost:8000/converter/${paisSelecionado.codigoMoeda}/${paisDestino.codigoMoeda}/${valor}`;
    return this.http.get<ConversaoResponse>(url);
  }

  consultar(moedaBase: string): Observable<ConsultaResponse> {
      const url = `http://localhost:8000/consultar/${moedaBase}`;
      return this.http.get<ConsultaResponse>(url);
    }

  getPaisPorMoeda(codigoMoeda: string) {
    return this.paises.find(pais => pais.codigoMoeda === codigoMoeda);
  }

  getPaises() {
    return this.paises;
  }

}
