import { IElement } from '../Element';
import { DomElementParent } from '../DomElementParent';
export default class Style extends DomElementParent implements IElement {
    public media?: string;
    public scoped?: string;
    public type?: string;
    

    generate() {

    }
}