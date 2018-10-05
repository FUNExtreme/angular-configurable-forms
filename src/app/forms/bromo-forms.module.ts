import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControlErrorComponent } from './controls/form-control-error/form-control-error.component';
import { NumberInputComponent } from './controls/number-input/number-input.component';
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
        FormControlErrorComponent,
        NumberInputComponent,
        FormFieldComponent,
        FormFieldErrorsComponent
    ],
    exports: [
        TextInputComponent,
        FormControlErrorComponent
    ]
})
export class BromoFormsModule { }
