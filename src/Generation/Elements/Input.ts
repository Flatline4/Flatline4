import { IElement } from '../Element';
import { DomElementParent } from '../DomElementParent';
export default class Input extends DomElementParent implements IElement {
    public accept?: string;
    public alt?: string;
    public autocomplete?: string;
    public autofocus?: boolean;
    public checked?: boolean;
    public dirname?: string;
    public disabled?: boolean;
    public form?: string;
    public formaction?: string;
    public formenctype?: string;
    public formmethod?: string;
    public formnovalidate?: string;
    public formtarget?: string;
    public height?: string;
    public list?: string;
    public max?: string;
    public maxlength?: string;
    public min?: string;
    public multiple?: string;
    public name?: string;
    public pattern?: string;
    public placeholder?: string;
    public readonly?: boolean;
    public required?: boolean;
    public size?: string;
    public src?: string;
    public step?: string;
    public type: string;
    public value: string;
    public width?: string;
    
    
    generate() : HTMLElement{
        var element = document.createElement("input");

        for(let child of this.Children)
        {
            element.appendChild(child.generate());
        }

        return element;
    }
}