import { IElement } from '../Element';
import { DomElementParent } from '../DomElementParent';
export default class Body extends DomElementParent implements IElement {
    generate() : HTMLElement{
        var eles = document.getElementsByTagName("body");
        if (eles.length != 1)
            throw new Error("There can only be 1 body element");
        
        var element = eles[0];

        for(let child of this.Children)
        {
            element.appendChild(child.generate());
        }

        return element;
    }
}