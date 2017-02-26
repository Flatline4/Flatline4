import { IElement } from '../Element';
import { DomElementParent } from '../DomElementParent';
export default class Source extends DomElementParent implements IElement {
    public src?: string;
    public srcSet?: string;
    public media?: string;
    public sizes?: string;
    public type?: string;
    
    generate() : HTMLElement{
        var element = document.createElement("source");

        for(let child of this.Children)
        {
            element.appendChild(child.generate());
        }

        return element;
    }
}