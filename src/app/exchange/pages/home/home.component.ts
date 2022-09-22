import 'rxjs/add/observable/interval';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ExchangeRates } from '../../../core/models/exchange-rates';
import { ExchangeService } from '../../../core/services/exchange.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  pEUR = 1;
  pUSD = 1;

  exchangeEURRates: ExchangeRates = {} as ExchangeRates;
  exchangeUSDRates: ExchangeRates = {} as ExchangeRates;

  autoRefresh: any;
  obs: any;

  constructor(private exchangeService: ExchangeService) {}

  ngOnInit() {
    this.callExchangeEURRates();
    this.callExchangeUSDRates();

    this.createInterval();
  }

  callExchangeEURRates() {
    this.exchangeService
      .getExchangeRates('EUR')
      .subscribe((exchangeRates) => (this.exchangeEURRates = exchangeRates));
  }

  callExchangeUSDRates() {
    this.exchangeService
      .getExchangeRates('USD')
      .subscribe((exchangeRates) => (this.exchangeUSDRates = exchangeRates));
  }

  createInterval() {
    this.obs = Observable.interval(10000).subscribe(() => {
      this.callExchangeEURRates();
      this.callExchangeUSDRates();
    });
  }

  refreshEURRates() {
    this.callExchangeEURRates();

    this.obs.unsubscribe();
    this.createInterval();
  }

  refreshUSDRates() {
    this.callExchangeUSDRates();

    this.obs.unsubscribe();
    this.createInterval();
  }
}
