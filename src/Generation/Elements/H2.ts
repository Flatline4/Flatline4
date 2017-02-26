import { IElement } from '../Element';
import { DomElementParent } from '../DomElementParent';
export default class H2 extends DomElementParent implements IElement {
    generate() : HTMLElement{
        var element = document.createElement("h2");

        for(let child of this.Children)
        {
            element.appendChild(child.generate());
        }

        return element;
    }
}