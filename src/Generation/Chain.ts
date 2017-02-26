import A from './Elements/A';
import B from './Elements/B';
import Br from './Elements/Br';
import Button from './Elements/Button';
import { IElement } from './Element';
import { INodeElement } from './Element';
import { DomElement } from './DomElement';

export default class Chain<T> {
    private Children: (IElement | INodeElement)[] = [];

    constructor(public Parent: T){

    }

    a(href?: string, children?: (child: Chain<A>) => void, click?: (a: A) => void){
        var ele = new A();
        if (href)
            ele.href = href;
        var chain = new Chain(ele);
        if (children)
            children(chain);
        ele.Children = chain.getChildren();
        this.Children.push(ele);
        return this;
    }

    b(children?: (b: B) => void) {
        var ele = new B();
        if (children)
            children(ele);
        this.Children.push(ele);
        return this;
    }

    br(children?: (br: Br) => void){
        var br = new Br();
        if (children)
            children(br);
        this.Children.push(br);
        return this;
    }

    button(click?: (btn: Button) => void, children?: (child: Chain<Button>) => void){
        var ele = new Button();
        var chain = new Chain(ele);
        if (children)
            children(chain);
        ele.Children = chain.Children;
        this.Children.push(ele);
        return this;
    }

    getChildren() {
        return this.Children;
    }
}