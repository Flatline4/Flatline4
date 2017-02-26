import { IElement } from '../Element';
import { DomElementParent } from '../DomElementParent';
export default class Aside extends DomElementParent implements IElement {
    generate() : HTMLElement{
        var element = document.createElement("aside");

        for(let child of this.Children)
        {
            element.appendChild(child.generate());
        }

        return element;
    }
}