import { IElement } from './Element';
import { DomElement } from './DomElement';

export abstract class DomElementParent extends DomElement{
    protected Children: IElement[];
}