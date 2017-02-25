import { IElement } from '../Element';
import { DomElementParent } from '../DomElementParent';
export default class Script extends DomElementParent implements IElement {
    public async?: string;
    public charset?: string;
    public defer?: string;
    public src?: string;
    public type?: string;
    
    generate() : HTMLElement{
        var element = document.createElement("q");

        for(let child of this.Children)
        {
            element.appendChild(child.generate());
        }

        return element;
    }
}