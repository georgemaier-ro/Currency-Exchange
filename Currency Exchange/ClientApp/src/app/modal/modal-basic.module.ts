import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatButtonModule } from '@angular/material/button';
import { NgbdModalBasic } from './modal-basic.component';

@NgModule({
  imports: [BrowserModule, NgbModule, MatButtonModule],
  declarations: [NgbdModalBasic],
  exports: [NgbdModalBasic],
  bootstrap: [NgbdModalBasic]
})
export class NgbdModalBasicModule { }
