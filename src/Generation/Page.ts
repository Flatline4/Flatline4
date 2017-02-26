import { IElement } from './Element';
import A from './Elements/A';
import B from './Elements/B';
import Br from './Elements/Br';
import Button from './Elements/Button';


export default class Page {
    private Nodes: IElement[];
    private Parent: IElement;

    constructor(p: IElement){
        this.Nodes = [];
        this.Parent = p;
    }

    a(href?: string, children?: (a: A) => void, click?: (a: A) => void){
        var ele = new A();
        if (href)
            ele.href = href;
        if (children)
            children(ele);

        this.Nodes.push(ele);
    }

    b(children?: (b: B) => void) {
        var ele = new B();
        if (children)
            children(ele);
        this.Nodes.push(ele);
    }

    br(children?: (br: Br) => void){
        var br = new Br();
        if (children)
            children(br);
        this.Nodes.push(br);
    }

    button(click?: (btn: Button) => void, children?: (btn: Button) => void){
        var ele = new Button();
        if (children)
            children(ele);
        this.Nodes.push(ele);
    }

    generate(body: HTMLElement) {
        for(let child of this.Nodes){
            body.appendChild(child.generate());
        }
    }
}