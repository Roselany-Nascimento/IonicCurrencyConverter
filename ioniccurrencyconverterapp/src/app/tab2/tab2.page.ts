import { Component } from '@angular/core';
import { PAISES } from '../models/paises.model';

interface ConsultaResponse {
  result : string;
  documentation? : string;
  terms_of_use? : string;
  time_last_update_unix? : number; 
  time_last_update_utc? : string; 
  time_next_update_unix? : number; 
  time_next_update_utc? : string;
  error_type? : string;
  base_code? : string;
  conversion_rates? : { [key: string]: number };
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
