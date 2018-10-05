import { ITextInputConfig } from '../../../forms/controls/text-input/ITextInputConfig';
import { DynamicFormFieldType } from '../fields/DynamicFormFieldType';
import { DynamicFormFieldInputConfig } from './DynamicFormFieldConfig';

export class TextDynamicFormFieldInputConfig extends DynamicFormFieldInputConfig<ITextInputConfig> {
    public type: DynamicFormFieldType = DynamicFormFieldType.Text;

    constructor(
        public name: string,
        public label: string
    ) {
        super(name, label);
    }
}
