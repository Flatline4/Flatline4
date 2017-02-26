import { IElement } from './Element';
import { DomElement } from './DomElement';
import { INodeElement } from './Element';


export abstract class DomElementParent extends DomElement{
    public children: (IElement | INodeElement)[] = [];

    
}