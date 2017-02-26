import { IElement } from '../Element';
import { DomElementParent } from '../DomElementParent';
export default class Img extends DomElementParent implements IElement {
    public alt?: string;
    public crossorigin?: string;
    public height?: number;
    public ismap?: boolean;
    public longdesc?: string;
    public sizes?: string;
    public src?: string;
    public srcset?: string;
    public usemap?: string;
    public width?: number;
    
    generate() : HTMLElement{
        var element = document.createElement("img");

        if (this.id) {
            element.id = this.id;
        }

        var styleString = this.style.generateCSS();
        if (styleString) {
            element.setAttribute('style', styleString);
        }
        if (this.className) {
            element.className = this.className;
        }

        if (this.alt) {
            element.alt = this.alt;
        }

        if (this.crossorigin) {
            element.crossOrigin = this.crossorigin;
        }

        if (this.height) {
            element.height = this.height;
        }

        if (this.ismap) {
            element.isMap = this.ismap;
        }

        if (this.longdesc) {
            element.longDesc = this.longdesc;
        }

        if (this.sizes) {
            element.sizes = this.sizes;
        }

        if (this.src) {
            element.src = this.src;
        }

        if (this.srcset) {
            element.srcset = this.srcset;
        }

        if (this.usemap) {
            element.useMap = this.usemap;
        }

        if (this.width) {
            element.width = this.width;
        }

        for(let child of this.children)
        {
            element.appendChild(child.generate());
        }

        return element;
    }
}