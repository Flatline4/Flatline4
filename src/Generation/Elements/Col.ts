import { IElement } from '../Element';
import { DomElementParent } from '../DomElementParent';
export default class Col extends DomElementParent implements IElement {
    public align?: string;
    public char?: string;
    public charoff?: string;
    public span?: string;
    public valign?: string;
    public width?: string;

    generate() {

    }
}