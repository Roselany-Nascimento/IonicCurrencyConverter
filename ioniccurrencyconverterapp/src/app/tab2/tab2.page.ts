import { Component } from '@angular/core';
import { PAISES } from '../models/paises.model';

interface ConsultaResponse {
  moeda_base : string;
  taxas : { [key: string]: number };
  data_hora_consulta : string;
}

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {

  constructor() {}

  paises = PAISES;
  paisSelecionado: any;

  historico: ConsultaResponse[] = [];
  consulta: ConsultaResponse | null = null;
  
  consultar() {}

}
