import { IElement } from '../Element';
import { DomElementParent } from '../DomElementParent';
export default class Embed extends DomElementParent implements IElement {
    public height?: string;
    public src?: string;
    public type?: string;
    public width?: string;
    
    generate() : HTMLElement{
        var element = document.createElement("embed");

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

        if (this.height) {
            element.height = this.height;
        }

        if (this.src) {
            element.src = this.src;
        }

        if (this.type) {
            element.setAttribute('type', this.type);
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