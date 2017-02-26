import { IElement } from '../Element';
import { DomElementParent } from '../DomElementParent';
export default class Canvas extends DomElementParent implements IElement {
    public height?: string;
    public width?: string;
    
    generate() : HTMLElement{
        var element = document.createElement("canvas");

        for(let child of this.Children)
        {
            element.appendChild(child.generate());
        }

        return element;
    }
}