import { IElement } from '../Element';
import { DomElementParent } from '../DomElementParent';
export default class Div extends DomElementParent implements IElement {
    generate() : HTMLElement{
        var element = document.createElement("div");

        for(let child of this.Children)
        {
            element.appendChild(child.generate());
        }

        return element;
    }
}