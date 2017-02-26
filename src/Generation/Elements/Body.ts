import { IElement } from '../Element';
import { DomElementParent } from '../DomElementParent';
export default class Body extends DomElementParent implements IElement {
    generate() : HTMLElement{
        var eles = document.getElementsByTagName("body");
        if (eles.length != 1)
            throw new Error("There can only be 1 body element");
        
        var element = eles[0]; 

        var i = 0;
        while(element.children.length > i) {
            if (element.children[i].tagName.toLowerCase() === 'script'){
                i += 1;
                continue;
            }
            element.removeChild(element.children[i]);
        }

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