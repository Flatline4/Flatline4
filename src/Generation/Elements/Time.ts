import { IElement } from '../Element';
import { DomElementParent } from '../DomElementParent';
export default class Time extends DomElementParent implements IElement {
    public datetime?: string;
    
    generate() : HTMLElement{
        var element = document.createElement("time");

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

        if (this.datetime) {
            element.dateTime = this.datetime;
        }

        for(let child of this.children)
        {
            element.appendChild(child.generate());
        }

        return element;
    }
}