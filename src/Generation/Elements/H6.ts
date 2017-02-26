import { IElement } from '../Element';
import { DomElementParent } from '../DomElementParent';
export default class H6 extends DomElementParent implements IElement {
    generate() : HTMLElement{
        var element = document.createElement("h6");

        for(let child of this.children)
        {
            element.appendChild(child.generate());
        }

        return element;
    }
}