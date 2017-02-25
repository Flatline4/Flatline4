import { IElement } from '../Element';
import { DomElementParent } from '../DomElementParent';
export default class Link extends DomElementParent implements IElement {
    public crossorigin?: boolean;
    public href?: string;
    public hreflang?: string;
    public media?: string;
    public rel?: string;
    public sizes?: string;
    public type?: string;
    
    generate() : HTMLElement{
        var element = document.createElement("link");

        for(let child of this.Children)
        {
            element.appendChild(child.generate());
        }

        return element;
    }
}