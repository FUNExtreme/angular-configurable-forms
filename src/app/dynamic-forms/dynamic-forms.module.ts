import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BromoFormsModule } from '../forms/bromo-forms.module';
import { DynamicFieldComponent } from './components/dynamic-field/dynamic-field.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,

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
