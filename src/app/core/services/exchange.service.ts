import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExchangeRates } from '../models/exchange-rates';

@Injectable()
export class ExchangeService {
  private baseURL = 'https://api.apilayer.com/exchangerates_data';
  constructor(private http: HttpClient) {}

  public getExchangeRates(currency: string): Observable<ExchangeRates> {
    return this.http.get<ExchangeRates>(
      `${this.baseURL}/latest?base=${currency}`
    );
  }
}
