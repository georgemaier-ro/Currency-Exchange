import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-currency-card',
  templateUrl: './currency-card.component.html',
  styleUrls: ['./currency-card.component.css']
})
export class CurrencyCardComponent {
  @Input() exchangeShort;
  @Input() exchangeLong;

  toggle = true;

  //Toggles button color to showcase selected currencies
  enableDisableRule(job) {
    this.toggle = !this.toggle;
  }
}
