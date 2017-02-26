import { DomElementParent } from '../DomElementParent';
import { IElement } from '../Element';
export default class A extends DomElementParent implements IElement{
    public download?: boolean;
    public href?: string;
    public hreflang?: string;
    public media?: string;
    public rel?: string;
    public target?: string;
    public type?: string;

    generate() : HTMLElement{
        var element = document.createElement("a");
        var styleString = this.style.generateCSS();

        if (this.id)
            element.id = this.id;
        if (styleString) {
            element.setAttribute('style', styleString);
        }
        if (this.href)
            element.href = this.href;
        if (this.download)
            element.download = "";
        if (this.hreflang)
            element.hreflang = this.hreflang;
        if (this.rel)
            element.rel = this.rel;
        if (this.target)
            element.target = this.target;
        if (this.type)
            element.type = this.type;
        if (this.media)
            element.setAttribute("media", this.media);
            

        for(let child of this.children)
        {
            element.appendChild(child.generate());
        }

        return element;
    }
}