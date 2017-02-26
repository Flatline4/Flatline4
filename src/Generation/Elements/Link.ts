import { IElement } from '../Element';
import { DomElementParent } from '../DomElementParent';
export default class Link extends DomElementParent implements IElement {
    public crossorigin?: string;
    public href?: string;
    public hreflang?: string;
    public media?: string;
    public rel?: string;
    public sizes?: string;
    public type?: string;
    
    generate() : HTMLElement{
        var element = document.createElement("link");

        if (this.id) {
            element.id = this.id;
        }

        if (this.crossorigin) {
            element.setAttribute('crossorigin', this.crossorigin);
        }

        if (this.href) {
            element.href = this.href;
        }

        if (this.hreflang) {
            element.hreflang = this.hreflang;
        }

        if (this.media) {
            element.media = this.media;
        }

        if (this.rel) {
            element.rel = this.rel;
        }

        if (this.sizes) {
            element.setAttribute('sizes', this.sizes);
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