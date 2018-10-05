import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BromoFormsModule } from '../forms/bromo-forms.module';
import { DynamicFieldComponent } from './components/dynamic-field/dynamic-field.component';

@NgModule({
  imports: [
    BrowserModule,
    BromoFormsModule
  ],
  declarations: [
    DynamicFieldComponent
  ],
  exports: [
    BromoFormsModule,

    DynamicFieldComponent
  ]
})
export class BromoDynamicFormsModule { }
