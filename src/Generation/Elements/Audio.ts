import { IElement } from '../Element';
import { DomElementParent } from '../DomElementParent';
export default class Audio extends DomElementParent implements IElement {
    public autoplay?: string;
    public controls?: string;
    public loop?: string;
    public muted?: string;
    public preload?: string;
    public src?: string;

    generate() : HTMLElement{
        var element = document.createElement("audio");

        for(let child of this.Children)
        {
            element.appendChild(child.generate());
        }

        return element;
    }
}