import { IElement } from '../Element';
import { DomElementParent } from '../DomElementParent';
export default class Menu extends DomElementParent implements IElement {
    public label?: string;
    public type?: string;
    
    generate() {

    }
}