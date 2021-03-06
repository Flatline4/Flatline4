import { IElement } from '../Element';
import { DomElementParent } from '../DomElementParent';
export default class Label extends DomElementParent implements IElement {
    public for?: string;
    public form?: string;
    
    generate() : HTMLElement{
        var element = document.createElement("label");

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

        if (this.for) {
            element.setAttribute('for', this.for);
        }

        for(let child of this.children)
        {
            element.appendChild(child.generate());
        }

        return element;
    }
}