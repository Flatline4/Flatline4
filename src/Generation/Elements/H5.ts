import { IElement } from '../Element';
import { DomElementParent } from '../DomElementParent';
export default class H5 extends DomElementParent implements IElement {
    generate() : HTMLElement{
        var element = document.createElement("h5");

        for(let child of this.children)
        {
            element.appendChild(child.generate());
        }

        return element;
    }
}