import { IElement } from '../Element';
import { DomElementParent } from '../DomElementParent';
export default class Map extends DomElementParent implements IElement {
    public name?: string;
    
    generate() : HTMLElement{
        var element = document.createElement("map");

        for(let child of this.Children)
        {
            element.appendChild(child.generate());
        }

        return element;
    }
}