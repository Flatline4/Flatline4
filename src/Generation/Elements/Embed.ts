import { IElement } from '../Element';
import { DomElementParent } from '../DomElementParent';
export default class Embed extends DomElementParent implements IElement {
    public height?: string;
    public src?: string;
    public type?: string;
    public width?: string;
    
    generate() : HTMLElement{
        var element = document.createElement("embed");

        for(let child of this.Children)
        {
            element.appendChild(child.generate());
        }

        return element;
    }
}