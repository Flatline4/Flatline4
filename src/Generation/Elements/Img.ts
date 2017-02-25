import { IElement } from '../Element';
import { DomElementParent } from '../DomElementParent';
export default class Img extends DomElementParent implements IElement {
    public alt?: string;
    public crossorigin?: boolean;
    public height?: string;
    public ismap?: string;
    public longdesc?: string;
    public sizes?: string;
    public src?: string;
    public srcset?: string;
    public usemap?: boolean;
    public width?: string;
    
    generate() : HTMLElement{
        var element = document.createElement("img");

        for(let child of this.Children)
        {
            element.appendChild(child.generate());
        }

        return element;
    }
}