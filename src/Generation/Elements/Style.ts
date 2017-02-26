import { IElement } from '../Element';
import { DomElementParent } from '../DomElementParent';
export default class Style extends DomElementParent implements IElement {
    public media?: string;
    public scoped?: string;
    public type?: string;
    

    generate() : HTMLElement{
        var element = document.createElement("style");

        if (this.id) {
            element.id = this.id;
        }

        if (this.media) {
            element.media = this.media;
        }

        if (this.scoped) {
            element.setAttribute('scoped', this.scoped);
        }

        if (this.type) {
            element.type = this.type;
        }

        for(let child of this.Children)
        {
            element.appendChild(child.generate());
        }

        return element;
    }
}