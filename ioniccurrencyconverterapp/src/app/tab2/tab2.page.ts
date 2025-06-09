import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CurrencyService, ConsultaResponse } from '../services/currency.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})

export class Tab2Page {

  constructor(private http: HttpClient) {}

  paisSelecionado: any;

  historico: ConsultaResponse[] = [];
  consulta: ConsultaResponse | null = null;
  
  currencyService: CurrencyService = new CurrencyService(this.http);

  consultar() {
    console.log("Consultando as taxas da moeda: ", this.paisSelecionado.codigoMoeda);
    console.log("País: ", this.paisSelecionado.nomePais);
    this.currencyService.consultar(this.paisSelecionado.codigoMoeda).subscribe({
      next: (data) => {
        this.consulta = data;
        this.historico.push(data);
      },
      error: (error) => {
        console.error('Erro ao consultar taxas:', error);
      }
    });
  }

  listarPaises() {
    return this.currencyService.getPaises();
  }

  buscarPaisPorMoeda(codigoMoeda: string) {
    return this.currencyService.getPaisPorMoeda(codigoMoeda);
  }
}
