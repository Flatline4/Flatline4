import { IElement } from '../Element';
import { DomElementParent } from '../DomElementParent';
export default class Script extends DomElementParent implements IElement {
    public async?: string;
    public charset?: string;
    public defer?: string;
    public src?: string;
    public type?: string;
    
    generate() {

    }
}