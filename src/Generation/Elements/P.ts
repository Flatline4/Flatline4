import { IElement } from '../Element';
import { DomElementParent } from '../DomElementParent';
export default class P extends DomElementParent implements IElement {
    generate() : HTMLElement{
        var element = document.createElement("p");

        for(let child of this.Children)
        {
            element.appendChild(child.generate());
        }

        return element;
    }
}