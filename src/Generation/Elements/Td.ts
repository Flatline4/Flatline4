import { IElement } from '../Element';
import { DomElementParent } from '../DomElementParent';
export default class Td extends DomElementParent implements IElement {
    public colspan?: number;
    public headers?: string;
    public rowspan?: number;
    
    generate() : HTMLElement{
        var element = document.createElement("td");
        
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

        if (this.colspan) {
            element.colSpan = this.colspan;
        }

        if (this.headers) {
            element.headers = this.headers;
        }

        if (this.rowspan) {
            element.rowSpan = this.rowspan;
        }

        for(let child of this.children)
        {
            element.appendChild(child.generate());
        }

        return element;
    }
}