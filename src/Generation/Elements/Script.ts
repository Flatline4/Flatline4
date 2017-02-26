import { IElement } from '../Element';
import { DomElementParent } from '../DomElementParent';
export default class Script extends DomElementParent implements IElement {
    public async?: boolean;
    public charset?: string;
    public defer?: string;
    public src?: string;
    public type?: string;
    
    generate() : HTMLElement{
        var element = document.createElement("q");

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

        if (this.charset) {
            element.setAttribute('charset', this.charset);
        }

        if (this.defer) {
            element.setAttribute('defer', '');
        }

        if (this.src) {
            element.setAttribute('src', this.src);
        }

        if (this.type) {
            element.setAttribute('type', this.type);
        }

        for(let child of this.children)
        {
            element.appendChild(child.generate());
        }

        return element;
    }
}