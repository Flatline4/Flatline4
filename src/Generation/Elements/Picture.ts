import { IElement } from '../Element';
import { DomElementParent } from '../DomElementParent';
export default class Picture extends DomElementParent implements IElement {
    generate() : HTMLElement{
        var element = document.createElement("picture");

        for(let child of this.Children)
        {
            element.appendChild(child.generate());
        }

        return element;
    }
}