import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Currency Exchange'
  exchangeData: any;
  exchangeSymbolsData: any;
  exchangeRates;
  exchangeSymbols;
  amount;

  //Hardcoded selected rates to showcase returning selected data from API and amount changes
  selectedRates = ['EUR', 'USD', 'JPY', 'BTC', 'AED', 'CNY', 'PLN', 'RUB'];
  //selectedRates = {};
  //exchangeBase;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.getExchangeData();
    this.getExchangeSymbols();
  }


  //Gets exchange rates from API
  getExchangeData() {
    var url = 'http://api.exchangeratesapi.io/v1/latest?access_key=364e4bed90c7f8b783d45c35bf35d2bf';

    //if (this.exchangeBase) {
    //  url += "&base=" + this.exchangeBase;
    //}

    url += '&symbols=' + this.selectedRates.join(',');
    this.http.get(url).subscribe(response => {
      this.exchangeData = response;
      this.exchangeRates = this.exchangeData.rates;

      //this.exchangeBase = this.exchangeData.base;
      //for (var key in this.exchangeRates) {
      //  if (key == "EUR" || key == "USD") {
      //    this.selectedRates[key] = this.exchangeRates[key];
      //  }
      //}

    }, error => {
      console.log(error);
    })
  }

  //Gets symbols from API
  getExchangeSymbols() {
    this.http.get('http://api.exchangeratesapi.io/v1/symbols?access_key=364e4bed90c7f8b783d45c35bf35d2bf').subscribe(response => {
      this.exchangeSymbolsData = response;
      this.exchangeSymbols = this.exchangeSymbolsData.symbols;
    }, error => {
      console.log(error);
    })
  }

  //Calculates currency rates based on number changes in base currency
  calculateRate(amount: number, rate: number) {
    return Number(amount) * Number(rate);
  }

  //Converts the rates from string to numbers to be used as values in input type number
  convertRatesToNumbers(rate: string) {
    if (!isNaN(Number(rate)))
    {
      return Number(rate);
    } else
    {
      return 0;
    }
  }

  //Gets full name of a currency
  getFullName(key: string) {
    return this.exchangeSymbols[key];
  }

  //Updates value for nonbase currencies once base value is modified
  onKey(event: any) {
    this.amount = event.target.value;
  }

  //Made some attempts here to change the base using a (click)="changeBase(exchangeRate.key)" in app.component.html input matInput element
  //changeBase(key: string) {
  //  this.exchangeBase == key;
  //  this.getExchangeData();
  //}

}
