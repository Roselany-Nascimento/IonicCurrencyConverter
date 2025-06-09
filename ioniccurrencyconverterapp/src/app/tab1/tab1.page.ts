import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CurrencyService, ConversaoResponse } from '../services/currency.service';



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})

export class Tab1Page {

  constructor(private http: HttpClient) {}
  valor: number = 0;
  paisSelecionado : any;
  paisDestino : any;


  historico : ConversaoResponse[] = [];
  conversao : ConversaoResponse | null = null;
  
  currencyService: CurrencyService = new CurrencyService(this.http);


  converter() {
    console.log("Usando o valor: ", this.valor);
    console.log("Convertendo de: ", this.paisSelecionado);
    console.log("Convertendo para: ", this.paisDestino);
    this.currencyService.converter(this.paisSelecionado, this.paisDestino, this.valor).subscribe({
      next: (data) => {
        this.conversao = data;
        this.historico.push(data);
      },
      error: (error) => {
        console.error('Erro ao converter moeda:', error);
      }
    });
  }


  listarPaises() {
    return this.currencyService.getPaises();
  }
}
