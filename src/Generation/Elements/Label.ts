import { IElement } from '../Element';
import { DomElementParent } from '../DomElementParent';
export default class Label extends DomElementParent implements IElement {
    public for?: string;
    public form?: string;
    
    generate() : HTMLElement{
        var element = document.createElement("label");

        for(let child of this.Children)
        {
            element.appendChild(child.generate());
        }

        return element;
    }
}