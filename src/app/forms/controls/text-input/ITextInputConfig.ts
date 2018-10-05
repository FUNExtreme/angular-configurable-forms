import { IInputConfig } from '../IInputConfig';

export interface ITextInputConfig extends IInputConfig {
    type?: string;
    suffix?: string;
    prefix?: string;
    placeholder?: string;
}
