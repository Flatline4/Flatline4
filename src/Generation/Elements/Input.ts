import { IElement } from '../Element';
import { DomElementParent } from '../DomElementParent';
export default class Input extends DomElementParent implements IElement {
    public accept?: string;
    public alt?: string;
    public autocomplete?: string;
    public autofocus?: boolean;
    public checked?: boolean;
    public dirname?: string;
    public disabled?: boolean;
    public form?: string;
    public formaction?: string;
    public formenctype?: string;
    public formmethod?: string;
    public formnovalidate?: string;
    public formtarget?: string;
    public height?: string;
    public list?: string;
    public max?: string;
    public maxlength?: number;
    public min?: string;
    public multiple?: boolean;
    public name?: string;
    public pattern?: string;
    public placeholder?: string;
    public readonly?: boolean;
    public required?: boolean;
    public size?: number;
    public src?: string;
    public step?: string;
    public type?: string = 'text';
    public value?: string;
    public width?: string;
    
    
    generate() : HTMLElement{
        var element = document.createElement("input");

        if (this.id) {
            element.id = this.id;
        }

        if (this.accept) {
            element.accept = this.accept;
        }

        if (this.alt) {
            element.alt = this.alt;
        }

        if (this.autocomplete) {
            element.autocomplete = this.autocomplete;
        }

        if (this.autofocus) {
            element.autofocus = this.autofocus;
        }

        if (this.checked) {
            element.checked = this.checked;
        }

        if (this.dirname) {
            element.setAttribute('dirname', this.dirname);
        }

        if (this.disabled) {
            element.disabled = this.disabled;
        }

        if (this.formaction) {
            element.formAction = this.formaction;
        }

        if (this.formenctype) {
            element.formEnctype = this.formenctype;
        }

        if (this.formmethod) {
            element.formMethod = this.formmethod;
        }

        if (this.formnovalidate) {
            element.formNoValidate = this.formnovalidate;
        }

        if (this.formtarget) {
            element.formTarget = this.formtarget;
        }

        if (this.height) {
            element.height = this.height;
        }

        if (this.max) {
            element.max = this.max;
        }

        if (this.maxlength) {
            element.maxLength = this.maxlength;
        }

        if (this.min) {
            element.min = this.min;
        }

        if (this.multiple) {
            element.multiple = this.multiple;
        }

        if (this.name) {
            element.name = this.name;
        }

        if (this.pattern) {
            element.pattern = this.pattern;
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

        if (this.size) {
            element.size = this.size;
        }

        if (this.src) {
            element.src = this.src;
        }

        if (this.step) {
            element.step = this.step;
        }

        if (this.type) {
            element.type = this.type;
        }

        if (this.value) {
            element.value = this.value;
        }

        if (this.width) {
            element.width = this.width;
        }

        for(let child of this.Children)
        {
            element.appendChild(child.generate());
        }

        return element;
    }
}