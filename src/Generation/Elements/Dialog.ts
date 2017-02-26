import { IElement } from '../Element';
import { DomElementParent } from '../DomElementParent';
export default class Dialog extends DomElementParent implements IElement {
    public open?: string;
    
    generate() : HTMLElement{
        var element = document.createElement("dialog");

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

        if (this.open) {
            element.setAttribute('open', this.open);
        }

        for(let child of this.children)
        {
            element.appendChild(child.generate());
        }

        return element;
    }
}