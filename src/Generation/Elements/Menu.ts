import { IElement } from '../Element';
import { DomElementParent } from '../DomElementParent';
export default class Menu extends DomElementParent implements IElement {
    public label?: string;
    public type?: string;
    
    generate() : HTMLElement{
        var element = document.createElement("menu");

        if (this.id) {
            element.id = this.id;
        }

        if (this.label) {
            element.setAttribute('label', this.label);
        }

        if (this.type) {
            element.type = this.type;
        }

        for(let child of this.Children)
        {
            element.appendChild(child.generate());
        }

        return element;
    }
}