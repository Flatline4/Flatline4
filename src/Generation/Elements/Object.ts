import { IElement } from '../Element';
import { DomElementParent } from '../DomElementParent';
export default class Object extends DomElementParent implements IElement {
    public data?: string;
    public form?: string;
    public height?: string;
    public name?: string;
    public type?: string;
    public usemap?: string;
    public width?: string;
    
    
    generate() : HTMLElement{
        var element = document.createElement("object");

        for(let child of this.Children)
        {
            element.appendChild(child.generate());
        }

        return element;
    }
}