import { IElement } from '../Element';
import { DomElementParent } from '../DomElementParent';
export default class Title extends DomElementParent implements IElement {
    generate() : HTMLElement{
        var element = document.createElement("title");

        if (this.id) {
            element.id = this.id;
        }

        for(let child of this.Children)
        {
            element.appendChild(child.generate());
        }

        return element;
    }
}