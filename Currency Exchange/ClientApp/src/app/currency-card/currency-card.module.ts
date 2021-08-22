import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { CurrencyCardComponent } from './currency-card.component';

@NgModule({
  imports: [MatCardModule, BrowserModule],
  declarations: [CurrencyCardComponent],
  exports: [CurrencyCardComponent],
  bootstrap: [CurrencyCardComponent]
})
export class CurrencyCardModule { }
