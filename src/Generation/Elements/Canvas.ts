import { IElement } from '../Element';
import { DomElementParent } from '../DomElementParent';
export default class Canvas extends DomElementParent implements IElement {
    public height?: number;
    public width?: number;
    
    generate() : HTMLElement{
        var element = document.createElement("canvas");

        if (this.id) {
            element.id = this.id;
        }

        if (this.height) {
            element.height = this.height;
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