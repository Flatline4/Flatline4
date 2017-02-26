import { IElement } from '../Element';
import { DomElementParent } from '../DomElementParent';
export default class Ul extends DomElementParent implements IElement {
    generate() : HTMLElement{
        var element = document.createElement("ul");

        for(let child of this.children)
        {
            element.appendChild(child.generate());
        }

        return element;
    }
}