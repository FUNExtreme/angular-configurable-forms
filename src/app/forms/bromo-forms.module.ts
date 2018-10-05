import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TextInputComponent } from './controls/text-input/text-input.component';
import { FormFieldErrorsComponent } from './fields/form-field-errors/form-field-errors.component';
import { FormFieldComponent } from './fields/form-field/form-field.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    declarations: [
        TextInputComponent,
        FormFieldComponent,
        FormFieldErrorsComponent
    ],
    exports: [
        TextInputComponent,
        FormFieldComponent
    ]
})
export class BromoFormsModule { }
