import { IElement } from '../Element';
import { DomElementParent } from '../DomElementParent';
export default class Head extends DomElementParent implements IElement {
    generate() : HTMLElement{
        var element = document.createElement("head");

        if (this.id) {
            element.id = this.id;
        }

        for(let child of this.Children)
        {
            element.appendChild(child.generate());
        }

        return element;
    }
}