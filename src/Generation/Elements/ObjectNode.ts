import { IElement } from '../Element';
import { DomElementParent } from '../DomElementParent';
export default class ObjNode extends DomElementParent implements IElement {
    public data?: string;
    public form?: string;
    public height?: string;
    public name?: string;
    public type?: string;
    public usemap?: boolean;
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