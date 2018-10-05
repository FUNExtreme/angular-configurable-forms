import { Component } from '@angular/core';
import { DynamicFormFieldConfig } from './dynamic-forms/config/fields/DynamicFormFieldConfig';
import { TextDynamicFormFieldInputConfig } from './dynamic-forms/config/inputs/TextDynamicFormFieldConfig';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  config = new DynamicFormFieldConfig(new TextDynamicFormFieldInputConfig('name', 'label'));
}
