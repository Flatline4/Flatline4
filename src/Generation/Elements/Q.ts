import { IElement } from '../Element';
import { DomElementParent } from '../DomElementParent';
export default class Q extends DomElementParent implements IElement {
    public cite?: string;
    
    generate() : HTMLElement{
        var element = document.createElement("q");

        for(let child of this.Children)
        {
            element.appendChild(child.generate());
        }

        return element;
    }
}