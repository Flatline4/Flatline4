import { IElement } from '../Element';
import { DomElementParent } from '../DomElementParent';
export default class Details extends DomElementParent implements IElement {
    public open?: string;
    
    generate() : HTMLElement{
        var element = document.createElement("details");

        for(let child of this.Children)
        {
            element.appendChild(child.generate());
        }

        return element;
    }
}