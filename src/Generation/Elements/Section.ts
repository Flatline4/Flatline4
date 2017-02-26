import { IElement } from '../Element';
import { DomElementParent } from '../DomElementParent';
export default class Section extends DomElementParent implements IElement {
    generate() : HTMLElement{
        var element = document.createElement("section");

        for(let child of this.Children)
        {
            element.appendChild(child.generate());
        }

        return element;
    }
}