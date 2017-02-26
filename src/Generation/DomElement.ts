import { DomElementParent } from './DomElementParent';
import Styles from './Styles';

export abstract class DomElement {
    protected id: string;
    protected parent: DomElement;
    protected style: Styles;
}