import { IElement } from '../Element';
import { DomElementParent } from '../DomElementParent';
export default class Ol extends DomElementParent implements IElement {
    public reversed?: string;
    public start?: number;
    public type?: string;
    
    generate() : HTMLElement{
        var element = document.createElement("ol");

        if (this.id) {
            element.id = this.id;
        }

        if (this.reversed) {
            element.setAttribute('reversed', this.reversed);
        }

        if (this.start) {
            element.start = this.start;
        }

        if (this.type) {
            element.type = this.type;
        }

        for(let child of this.children)
        {
            element.appendChild(child.generate());
        }

        return element;
    }
}