import { IElement } from '../Element';
import { DomElementParent } from '../DomElementParent';
export default class Table extends DomElementParent implements IElement {
    public sortable?: boolean;
    
    generate() : HTMLElement{
        var element = document.createElement("table");

        for(let child of this.Children)
        {
            element.appendChild(child.generate());
        }

        return element;
    }
}