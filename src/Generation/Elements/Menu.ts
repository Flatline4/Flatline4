import { IElement } from '../Element';
import { DomElementParent } from '../DomElementParent';
export default class Menu extends DomElementParent implements IElement {
    public label?: string;
    public type?: string;
    
    generate() : HTMLElement{
        var element = document.createElement("menu");

        for(let child of this.Children)
        {
            element.appendChild(child.generate());
        }

        return element;
    }
}