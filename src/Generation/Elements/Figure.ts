import { IElement } from '../Element';
import { DomElementParent } from '../DomElementParent';
export default class Figure extends DomElementParent implements IElement {
    generate() : HTMLElement{
        var element = document.createElement("figure");

        for(let child of this.Children)
        {
            element.appendChild(child.generate());
        }

        return element;
    }
}