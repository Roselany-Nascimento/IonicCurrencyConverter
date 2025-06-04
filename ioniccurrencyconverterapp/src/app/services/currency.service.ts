import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';	



@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  private readonly API_KEY = 'a0f079f1e2002d76885bc687';
  private readonly API_URL = 'https://v6.exchangerate-api.com/v6/'

  constructor(private http : HttpClient) {}

  
}
