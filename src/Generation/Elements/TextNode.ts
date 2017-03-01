import { DomElement } from '../DomElement';
import { INodeElement } from '../Element';

export default class TextNode extends DomElement implements INodeElement{
    public text?: string;

    generate() : Text{
        return document.createTextNode(this.text);
    }
}