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

        if (this.id) {
            element.id = this.id;
        }

        if (this.src) {
            element.src = this.src;
        }

        if (this.srcSet) {
            element.srcset = this.srcSet;
        }

        if (this.media) {
            element.media = this.media;
        }

        if (this.sizes) {
            element.sizes = this.sizes;
        }

        if (this.type) {
            element.type = this.type;
        }

        for(let child of this.children)
        {
            element.appendChild(child.generate());
        }

        return element;
    }
}