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

        var styleString = this.style.generateCSS();
        if (styleString) {
            element.setAttribute('style', styleString);
        }
        if (this.className) {
            element.className = this.className;
        }

        if (this.height) {
            element.height = this.height;
        }

        if (this.width) {
            element.width = this.width;
        }

        for(let child of this.children)
        {
            element.appendChild(child.generate());
        }

        return element;
    }
}