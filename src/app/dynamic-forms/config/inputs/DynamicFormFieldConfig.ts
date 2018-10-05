import { DynamicFormFieldType } from '../fields/DynamicFormFieldType';

export interface IDynamicFormFieldInputConfig<TInputConfig = any> {
    type: DynamicFormFieldType;

    label: string;
    name: string;
    tooltip: string;
    inputConfig: TInputConfig;
}

export abstract class DynamicFormFieldInputConfig<TInputConfig = any> implements IDynamicFormFieldInputConfig<TInputConfig> {
    public abstract type: DynamicFormFieldType;

    public tooltip: string;
    public inputConfig: TInputConfig;

    constructor(
        public name: string,
        public label: string
    ) { }

    setTooltip = (tooltip: string) => {
        this.tooltip = tooltip;
    }

    setConfig = (config: TInputConfig) => {
        this.inputConfig = config;
    }
}
