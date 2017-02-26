import { IElement } from '../Element';
import { DomElementParent } from '../DomElementParent';
export default class H extends DomElementParent implements IElement {
    public num: string;
    
    generate() : HTMLElement{
        var element = document.createElement("h");

        if (this.num) {
            element.setAttribute('num', this.num);
        }

        for(let child of this.Children)
        {
            element.appendChild(child.generate());
        }

        return element;
    }
}