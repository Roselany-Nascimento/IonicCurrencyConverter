import { Component } from '@angular/core';
import { PAISES } from '../models/paises.model';


interface ConversaoResponse {
  moeda_base : string; 
  moeda_destino : string; 
  taxa : number;
  valor_convertido : number;
  data_hora_conversao : string;
}

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})

export class Tab1Page {
  
  constructor() {}
  valor: number | null = null;
  paises = PAISES;
  paisSelecionado : any;
  paisDestino : any;


  historico : ConversaoResponse[] = [];
  conversao : ConversaoResponse | null = null;
  
  converter() {
    console.log("Usando o valor: ", this.valor);
    console.log("Convertendo de: ", this.paisSelecionado);
    console.log("Convertendo para: ", this.paisDestino);
    if (this.valor === null || this.paisSelecionado === undefined || this.paisDestino === undefined) {

      console.error("Por favor, preencha todos os campos.");
      return; 
    } else {
  
    }

  }
}
