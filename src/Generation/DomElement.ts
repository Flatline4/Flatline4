import { DomElementParent } from './DomElementParent';

export abstract class DomElement {
    protected id: string;
    protected parent: DomElement;
}