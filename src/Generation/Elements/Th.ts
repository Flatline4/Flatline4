import { IElement } from '../Element';
import { DomElementParent } from '../DomElementParent';
export default class Th extends DomElementParent implements IElement {
    public abbr?: string;
    public colspan?: number;
    public headers?: string;
    public rowspan?: number;
    public scope?: string;
    public sorted?: string;

    generate() : HTMLElement{
        var element = document.createElement("th");
        
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

        if (this.abbr) {
            element.abbr = this.abbr;
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

        if (this.scope) {
            element.scope = this.scope;
        }

        if (this.sorted) {
            element.setAttribute("sorted", this.sorted);
        }

        for(let child of this.children)
        {
            element.appendChild(child.generate());
        }

        return element;
    }
}