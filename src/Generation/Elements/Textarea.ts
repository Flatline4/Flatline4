import { IElement } from '../Element';
import { DomElementParent } from '../DomElementParent';
export default class Textarea extends DomElementParent implements IElement {
    public autofocus?: boolean;
    public cols?: string;
    public dirname?: string;
    public disabled?: boolean;
    public form?: string;
    public maxlength?: string;
    public name?: string;
    public placeholder?: string;
    public readonly?: boolean;
    public required?: boolean;
    public rows?: string;
    public wrap?: string;
    
    generate() : HTMLElement{
        var element = document.createElement("textarea");

        for(let child of this.Children)
        {
            element.appendChild(child.generate());
        }

        return element;
    }
}