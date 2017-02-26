import { IElement } from '../Element';
import { DomElementParent } from '../DomElementParent';
export default class Video extends DomElementParent implements IElement {
    public autoplay?: boolean;
    public controls?: string;
    public height?: number;
    public loop?: boolean;
    public muted?: boolean;
    public poster?: string;
    public preload?: boolean;
    public src?: string;
    public width?: number;

    generate() : HTMLElement{
        var element = document.createElement("video");

        for(let child of this.Children)
        {
            element.appendChild(child.generate());
        }

        return element;
    }
}