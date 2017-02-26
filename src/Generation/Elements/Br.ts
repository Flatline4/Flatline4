import { IElement } from '../Element';
import { DomElement } from '../DomElement';
export default class Br extends DomElement implements IElement {
    generate() : HTMLElement{
        var element = document.createElement("br");

        if (this.id)
            element.id = this.id;

        return element;
    }
}