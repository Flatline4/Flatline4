import { IElement } from '../Element';
import { DomElementParent } from '../DomElementParent';
export default class P extends DomElementParent implements IElement {
    generate() : HTMLElement{
        var element = document.createElement("p");

        if (this.id) {
            element.id = this.id;
        }

        for(let child of this.children)
        {
            element.appendChild(child.generate());
        }

        return element;
    }
}