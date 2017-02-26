import { IElement } from '../Element';
import { DomElementParent } from '../DomElementParent';
export default class Table extends DomElementParent implements IElement {
    public sortable?: string;
    
    generate() : HTMLElement{
        var element = document.createElement("table");

        if (this.id) {
            element.id = this.id;
        }

        if (this.sortable) {
            element.setAttribute('sortable', this.sortable);
        }

        for(let child of this.Children)
        {
            element.appendChild(child.generate());
        }

        return element;
    }
}