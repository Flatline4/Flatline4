import { IElement } from '../Element';
import { DomElementParent } from '../DomElementParent';
export default class Body extends DomElementParent implements IElement {
    generate() : HTMLElement{
        var element = document.createElement("body");

        for(let child of this.Children)
        {
            element.appendChild(child.generate());
        }

        return element;
    }
}