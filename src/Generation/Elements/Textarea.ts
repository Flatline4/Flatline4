import { IElement } from '../Element';
import { DomElementParent } from '../DomElementParent';
export default class Textarea extends DomElementParent implements IElement {
    public autofocus?: boolean;
    public cols?: number;
    public dirname?: string;
    public disabled?: boolean;
    public form?: string;
    public maxlength?: number;
    public name?: string;
    public placeholder?: string;
    public readonly?: boolean;
    public required?: boolean;
    public rows?: number;
    public wrap?: string;
    
    generate() : HTMLElement{
        var element = document.createElement("textarea");

        if (this.id) {
            element.id = this.id;
        }

        var styleString = this.style.generateCSS();
        if (styleString) {
            element.setAttribute('style', styleString);
        }
        if (this.className) {
            element.className = this.className;
        }

        if (this.autofocus) {
            element.autofocus = this.autofocus;
        }

        if (this.cols) {
            element.cols = this.cols;
        }

        if (this.dirname) {
            element.setAttribute('dirname', this.dirname);
        }

        if (this.disabled) {
            element.disabled = this.disabled;
        }

        if (this.maxlength) {
            element.maxLength = this.maxlength;
        }

        if (this.name) {
            element.name = this.name;
        }

        if (this.placeholder) {
            element.placeholder = this.placeholder;
        }
        
        if (this.readonly) {
            element.readOnly = this.readonly;
        }

        if (this.required) {
            element.required = this.required;
        }

        if (this.rows) {
            element.rows = this.rows;
        }

        if (this.wrap) {
            element.wrap = this.wrap;
        }

        for(let child of this.children)
        {
            element.appendChild(child.generate());
        }

        return element;
    }
}