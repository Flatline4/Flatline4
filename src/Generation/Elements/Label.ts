import { IElement } from '../Element';
import { DomElementParent } from '../DomElementParent';
export default class Label extends DomElementParent implements IElement {
    public for?: string;
    public form?: string;
    
    generate() {

    }
}