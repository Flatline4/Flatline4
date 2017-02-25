import { IElement } from '../Element';
import { DomElementParent } from '../DomElementParent';
export default class Form extends DomElementParent implements IElement {
    public acceptCharset?: string;
    public action?: string;
    public autocomplete?: string;
    public enctype?: string;
    public method?: string;
    public name?: string;
    public novalidate?: string;
    public target?: string;
    
    generate() : HTMLElement{
        var element = document.createElement("form");

        for(let child of this.Children)
        {
            element.appendChild(child.generate());
        }

        return element;
    }
}