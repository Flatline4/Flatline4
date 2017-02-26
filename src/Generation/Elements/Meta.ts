import { IElement } from '../Element';
import { DomElementParent } from '../DomElementParent';
export default class Meta extends DomElementParent implements IElement {
    public charset?: string;
    public content?: string;
    public httpEquiv?: string;
    public name?: string;
    
    generate() : HTMLElement{
        var element = document.createElement("meta");

        if (this.id) {
            element.id = this.id;
        }

        if (this.charset) {
            element.charset = this.charset;
        }
        
        if (this.content) {
            element.content = this.content;
        }

        if (this.httpEquiv) {
            element.httpEquiv = this.httpEquiv;
        }

        if (this.name) {
            element.name = this.name;
        }

        for(let child of this.children)
        {
            element.appendChild(child.generate());
        }

        return element;
    }
}