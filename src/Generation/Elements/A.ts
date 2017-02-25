import { DomElementParent } from '../DomElementParent';
import { IElement } from '../Element';
export default class A extends DomElementParent implements IElement{
    public download?: boolean;
    public href?: string;
    public hreflang?: string;
    public media?: string;
    public rel?: string;
    public target?: string;
    public type?: string;

    generate() : HTMLElement{
        var element = document.createElement("a");

        for(let child of this.Children)
        {
            element.appendChild(child.generate());
        }

        return element;
    }
}