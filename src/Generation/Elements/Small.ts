import { IElement } from '../Element';
import { DomElementParent } from '../DomElementParent';
export default class Small extends DomElementParent implements IElement {
    generate() : HTMLElement{
        var element = document.createElement("small");

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

        for(let child of this.children)
        {
            element.appendChild(child.generate());
        }

        return element;
    }
}