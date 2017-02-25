import { IElement } from '../Element';
import { DomElementParent } from '../DomElementParent';

export default class Button extends DomElementParent implements IElement {
    public autofocus?: string;
    public disabled?: string;
    public form?: string;
    public formaction?: string;
    public formenctype?: string;
    public formmethod?: string;
    public formnovalidate?: string;
    public formtarget?: string;
    public name?: string;
    public type?: string;
    public value?: string;
    
    generate() {

    }
}