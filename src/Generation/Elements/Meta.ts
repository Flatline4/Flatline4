import { IElement } from '../Element';
import { DomElementParent } from '../DomElementParent';
export default class Meta extends DomElementParent implements IElement {
    public charset?: string;
    public content?: string;
    public httpEquiv?: string;
    public name?: string;
    
    generate() {

    }
}