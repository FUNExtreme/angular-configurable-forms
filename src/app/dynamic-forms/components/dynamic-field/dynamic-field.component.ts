import { Component, Input } from '@angular/core';
import { DynamicFormFieldConfig } from '../../config/fields/DynamicFormFieldConfig';
import { BromoFormGroup } from '../../BromoFormGroup';

@Component({
  selector: 'bromo-dynamic-field',
  templateUrl: './dynamic-field.component.html',
  styleUrls: ['./dynamic-field.component.scss']
})
export class DynamicFieldComponent {

  @Input() config: DynamicFormFieldConfig;
  @Input() bromoFormGroup: BromoFormGroup;
}
