import { IElement } from '../Element';
import { DomElement } from '../DomElement';
export default class Hr extends DomElement implements IElement {
    generate() : HTMLElement{
        var element = document.createElement("hr");

        return element;
    }
}