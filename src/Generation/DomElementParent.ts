import { IElement } from './Element';
import { DomElement } from './DomElement';
import { INodeElement } from './Element';

export abstract class DomElementParent extends DomElement{
    protected Children: (IElement | INodeElement)[] = [];
}