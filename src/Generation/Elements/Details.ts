import { IElement } from '../Element';
import { DomElementParent } from '../DomElementParent';
export default class Details extends DomElementParent implements IElement {
    public open?: string;
    
    generate() : HTMLElement{
        var element = document.createElement("details");

        if (this.id) {
            element.id = this.id;
        }

        if (this.open) {
            element.setAttribute('open', this.open);
        }

        for(let child of this.children)
        {
            element.appendChild(child.generate());
        }

        return element;
    }
}