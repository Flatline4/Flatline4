import { IElement } from '../Element';
import { DomElementParent } from '../DomElementParent';
export default class Span extends DomElementParent implements IElement {
    generate() : HTMLElement{
        var element = document.createElement("span");

        for(let child of this.Children)
        {
            element.appendChild(child.generate());
        }

        return element;
    }
}