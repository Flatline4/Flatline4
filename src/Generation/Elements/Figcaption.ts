import { IElement } from '../Element';
import { DomElementParent } from '../DomElementParent';
export default class Figcaption extends DomElementParent implements IElement {
    generate() : HTMLElement{
        var element = document.createElement("figcaption");

        for(let child of this.Children)
        {
            element.appendChild(child.generate());
        }

        return element;
    }
}