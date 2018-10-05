import { NgModule } from '@angular/core';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { BrowserModule } from '@angular/platform-browser';
import { BromoFormsModule } from '../forms/bromo-forms.module';
import { DynamicFieldComponent } from './components/dynamic-field/dynamic-field.component';

@NgModule({
  imports: [
    BrowserModule,
    BromoFormsModule
  ],
  declarations: [DynamicFieldComponent, DynamicFormComponent],
  exports: [
    BromoFormsModule
  ]
})
export class BromoDynamicFormsModule { }
