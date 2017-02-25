import { IElement } from '../Element';
import { DomElementParent } from '../DomElementParent';
export default class Textarea extends DomElementParent implements IElement {
    public autofocus?: string;
    public cols?: string;
    public dirname?: string;
    public disabled?: string;
    public form?: string;
    public maxlength?: string;
    public name?: string;
    public placeholder?: string;
    public readonly?: string;
    public required?: string;
    public rows?: string;
    public wrap?: string;
    
    generate() {

    }
}