import { IElement } from '../Element';
import { DomElementParent } from '../DomElementParent';
export default class Li extends DomElementParent implements IElement {
    public value?: string;
    
    generate() : HTMLElement{
        var element = document.createElement("li");

        for(let child of this.Children)
        {
            element.appendChild(child.generate());
        }

        return element;
    }
}