import { IElement } from '../Element';
import { DomElementParent } from '../DomElementParent';
export default class H3 extends DomElementParent implements IElement {
    generate() : HTMLElement{
        var element = document.createElement("h3");

        for(let child of this.Children)
        {
            element.appendChild(child.generate());
        }

        return element;
    }
}