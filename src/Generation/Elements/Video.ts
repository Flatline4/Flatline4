import { IElement } from '../Element';
import { DomElementParent } from '../DomElementParent';
export default class Video extends DomElementParent implements IElement {
    public autoplay?: boolean;
    public controls?: boolean;
    public height?: number;
    public loop?: boolean;
    public muted?: boolean;
    public poster?: string;
    public preload?: string;
    public src?: string;
    public width?: number;

    generate() : HTMLElement{
        var element = document.createElement("video");

        if (this.id) {
            element.id = this.id;
        }

        if (this.autoplay) {
            element.autoplay = this.autoplay;
        }

        if (this.controls) {
            element.controls = this.controls;
        }

        if (this.height) {
            element.height = this.height;
        }

        if (this.loop) {
            element.loop = this.loop;
        }

        if (this.muted) {
            element.muted = this.muted;
        }

        if (this.poster) {
            element.poster = this.poster;
        }

        if (this.preload) {
            element.preload = this.preload;
        }

        if (this.src) {
            element.src = this.src;
        }

        if (this.width) {
            element.width = this.width;
        }

        for(let child of this.children)
        {
            element.appendChild(child.generate());
        }

        return element;
    }
}