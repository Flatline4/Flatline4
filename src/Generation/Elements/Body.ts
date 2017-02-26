import { IElement } from '../Element';
import { DomElementParent } from '../DomElementParent';
export default class Body extends DomElementParent implements IElement {
    generate() : HTMLElement{
        var eles = document.getElementsByTagName("body");
        if (eles.length != 1)
            throw new Error("There can only be 1 body element");
        
        var element = eles[0];

        if (this.id) 
            element.id = this.id;

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