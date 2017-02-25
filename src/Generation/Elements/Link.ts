import { IElement } from '../Element';
import { DomElementParent } from '../DomElementParent';
export default class Link extends DomElementParent implements IElement {
    public crossorigin?: string;
    public href?: string;
    public hreflang?: string;
    public media?: string;
    public rel?: string;
    public sizes?: string;
    public type?: string;
    
    generate() {

    }
}