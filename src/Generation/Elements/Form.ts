import { IElement } from '../Element';
import { DomElementParent } from '../DomElementParent';
export default class Form extends DomElementParent implements IElement {
    public acceptCharset?: string;
    public action?: string;
    public autocomplete?: string;
    public enctype?: string;
    public method?: string;
    public name?: string;
    public novalidate?: boolean;
    public target?: string;

    generate() : HTMLElement{
        var element = document.createElement("form");

        if (this.id) {
            element.id = this.id;
        }

        if (this.acceptCharset) {
            element.acceptCharset = this.acceptCharset;
        }

        if (this.action) {
            element.action = this.action;
        }

        if (this.autocomplete) {
            element.autocomplete = this.autocomplete;
        }

        if (this.enctype) {
            element.enctype = this.enctype;
        }

        if (this.method) {
            element.method = this.method;
        }

        if (this.name) {
            element.name = this.name;
        }

        if (this.novalidate) {
            element.noValidate = this.novalidate;
        }

        if (this.target) {
            element.target = this.target;
        }

        for(let child of this.children)
        {
            element.appendChild(child.generate());
        }

        return element;
    }
}