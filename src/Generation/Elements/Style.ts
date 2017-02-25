import { IElement } from '../Element';
import { DomElementParent } from '../DomElementParent';
export default class Style extends DomElementParent implements IElement {
    public media?: string;
    public scoped?: string;
    public type?: string;
    

    generate() : HTMLElement{
        var element = document.createElement("style");

        for(let child of this.Children)
        {
            element.appendChild(child.generate());
        }

        return element;
    }
}