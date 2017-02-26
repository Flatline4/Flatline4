import { IElement } from '../Element';
import { DomElementParent } from '../DomElementParent';
export default class Col extends DomElementParent implements IElement {
    public align?: string;
    public char?: string;
    public charoff?: string;
    public span?: number;
    public valign?: string;
    public width?: string;

    generate() : HTMLElement{
        var element = document.createElement("col");

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

        if (this.align) {
            element.align = this.align;
        }

        if (this.char) {
            element.setAttribute('char', this.char);
        }

        if (this.charoff) {
            element.setAttribute('charoff', this.charoff);
        }

        if (this.span) {
            element.span = this.span;
        }

        if (this.valign) {
            element.vAlign = this.valign;
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