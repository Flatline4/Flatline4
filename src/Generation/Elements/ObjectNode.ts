import { IElement } from '../Element';
import { DomElementParent } from '../DomElementParent';
export default class ObjectNode extends DomElementParent implements IElement {
    public data?: string;
    public form?: string;
    public height?: string;
    public name?: string;
    public type?: string;
    public usemap?: string;
    public width?: string;
    
    
    generate() : HTMLElement{
        var element = document.createElement("object");

        if (this.id) {
            element.id = this.id;
        }

        if (this.data) {
            element.data = this.data;
        }

        if (this.height) {
            element.height = this.height;
        }

        if (this.name) {
            element.name = this.name;
        }

        if (this.type) {
            element.type = this.type;
        }

        if (this.usemap) {
            element.useMap = this.usemap;
        }

        if (this.width) {
            element.width = this.width;
        }

        for(let child of this.Children)
        {
            element.appendChild(child.generate());
        }

        return element;
    }
}