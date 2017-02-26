import { IElement } from '../Element';
import { DomElementParent } from '../DomElementParent';
export default class Time extends DomElementParent implements IElement {
    public datetime?: string;
    
    generate() : HTMLElement{
        var element = document.createElement("time");

        for(let child of this.Children)
        {
            element.appendChild(child.generate());
        }

        return element;
    }
}