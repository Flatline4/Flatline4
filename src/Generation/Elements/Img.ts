import { IElement } from '../Element';
import { DomElementParent } from '../DomElementParent';
export default class Img extends DomElementParent implements IElement {
    public alt?: string;
    public crossorigin?: string;
    public height?: string;
    public ismap?: string;
    public longdesc?: string;
    public sizes?: string;
    public src?: string;
    public srcset?: string;
    public usemap?: string;
    public width?: string;
    
    generate() {

    }
}