import { IElement, INodeElement } from './Element'
import { DomElement } from './DomElement'

export abstract class DomElementParent extends DomElement {
  public children: (IElement | INodeElement)[] = [];
}
