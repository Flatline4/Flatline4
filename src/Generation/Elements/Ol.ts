import { IElement } from '../Element';
import { DomElementParent } from '../DomElementParent';
export default class Ol extends DomElementParent implements IElement {
    public reversed?: string;
    public start?: string;
    public type?: string;
    
    generate() {

    }
}