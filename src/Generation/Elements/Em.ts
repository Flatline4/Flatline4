import { IElement } from '../Element';
import { DomElementParent } from '../DomElementParent';
export default class Em extends DomElementParent implements IElement {
    generate() : HTMLElement{
        var element = document.createElement("em");

        for(let child of this.Children)
        {
            element.appendChild(child.generate());
        }

        return element;
    }
}