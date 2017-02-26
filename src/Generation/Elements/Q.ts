import { IElement } from '../Element';
import { DomElementParent } from '../DomElementParent';
export default class Q extends DomElementParent implements IElement {
    public cite?: string;
    
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

        if (this.cite) {
            element.cite = this.cite;
        }

        for(let child of this.children)
        {
            element.appendChild(child.generate());
        }

        return element;
    }
}