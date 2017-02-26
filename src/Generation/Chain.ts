import A from './Elements/A';
import B from './Elements/B';
import Br from './Elements/Br';
import Button from './Elements/Button';
import { IElement } from './Element';
import { INodeElement } from './Element';

export default class Chain {
    private Children: (IElement | INodeElement)[] = [];

    a(href?: string, children?: (a: A, child: Chain) => void, click?: (a: A) => void){
        var ele = new A();
        if (href)
            ele.href = href;
        var chain = new Chain();
        if (children)
            children(ele, chain);
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

    button(click?: (btn: Button) => void, children?: (btn: Button, child: Chain) => void){
        var ele = new Button();
        var chain = new Chain();
        if (children)
            children(ele, chain);
        ele.Children = chain.Children;
        this.Children.push(ele);
        return this;
    }

    getChildren() {
        return this.Children;
    }
}