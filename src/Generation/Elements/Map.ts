import { IElement } from '../Element';
import { DomElementParent } from '../DomElementParent';
export default class Map extends DomElementParent implements IElement {
    public name?: string;
    
    generate() : HTMLElement{
        var element = document.createElement("map");

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

        if (this.name) {
            element.name = this.name;
        }

        for(let child of this.children)
        {
            element.appendChild(child.generate());
        }

        return element;
    }
}