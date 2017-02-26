import { IElement } from '../Element';
import { DomElementParent } from '../DomElementParent';
export default class Button extends DomElementParent implements IElement {
    public autofocus?: boolean;
    public disabled?: boolean;
    public form?: string;
    public formaction?: string;
    public formenctype?: string;
    public formmethod?: string;
    public formnovalidate?: string;
    public formtarget?: string;
    public name?: string;
    public type?: string = 'button';
    public value?: string;
    
    generate() : HTMLElement{
        var element = document.createElement("button");

        for(let child of this.Children)
        {
            element.appendChild(child.generate());
        }

        return element;
    }
}