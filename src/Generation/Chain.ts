import Styles from './Styles';
import A from './Elements/A';
import Article from './Elements/Article';
import Aside from './Elements/Aside';
import Audio from './Elements/Audio';
import B from './Elements/B';
import Br from './Elements/Br';
import Button from './Elements/Button';
import Canvas from './Elements/Canvas';
import Code from './Elements/Code';
import Col from './Elements/Col';
import Details from './Elements/Details';
import Dialog from './Elements/Dialog';
import Div from './Elements/Div';
import Em from './Elements/Em';
import Embed from './Elements/Embed';
import Figcaption from './Elements/Figcaption';
import Figure from './Elements/Figure';
import Footer from './Elements/Footer';
import Form from './Elements/Form';
// CHRISTIAN FIX H TAGS
import Head from './Elements/Head';
import Header from './Elements/Header';
import Hr from './Elements/Hr';
import Img from './Elements/Img';
import Input from './Elements/Input';
import Label from './Elements/Label';
import Li from './Elements/Li';
import Link from './Elements/Link';
import Main from './Elements/Main';
import Map from './Elements/Map';
import Mark from './Elements/Mark';
import Menu from './Elements/Menu';
import Meta from './Elements/Meta';
import Nav from './Elements/Nav';
import ObjectNode from './Elements/ObjectNode';
import Ol from './Elements/Ol';
import P from './Elements/P';
import Picture from './Elements/Picture';
import Q from './Elements/Q';
import Script from './Elements/Script';
import Section from './Elements/Section';
import Small from './Elements/Small';
import Source from './Elements/Source';
import Span from './Elements/Span';
import Strong from './Elements/Strong';
import Style from './Elements/Style';
import Summary from './Elements/Summary';
import Table from './Elements/Table';
import Text from './Elements/Text';
import Textarea from './Elements/Textarea';
import Time from './Elements/Time';
import Title from './Elements/Title';
import Var from './Elements/Var';
import Video from './Elements/Video';
import { IElement } from './Element';
import { INodeElement } from './Element';
import { DomElement } from './DomElement';
import TextNode from './Elements/Text';

export default class Chain<T> {
    private children: (IElement | INodeElement)[] = [];
    public style: Styles = new Styles();

    constructor(public Parent: T){

    }

    a(children?: (child: Chain<A>) => void) {
        const ele = new A();
        const chain = new Chain(ele);
        if (children) {
            children(chain);
        }
    }

    a(href?: string, children?: (child: Chain<A>) => void, click?: (a: A) => void){
        var ele = new A();
        if (href)
            ele.href = href;
        var chain = new Chain(ele);
        if (children)
            children(chain);
        ele.children = chain.getChildren();
        this.children.push(ele);
        return this;
    }

    b(children?: (b: B) => void) {
        var ele = new B();
        if (children)
            children(ele);
        this.children.push(ele);
        return this;
    }

    br(children?: (br: Br) => void){
        var br = new Br();
        if (children)
            children(br);
        this.children.push(br);
        return this;
    }

    button(click?: (btn: Button) => void, children?: (child: Chain<Button>) => void){
        var ele = new Button();
        var chain = new Chain(ele);
        if (children)
            children(chain);
        ele.children = chain.children;
        this.children.push(ele);
        return this;
    }

    text(str: string){
        var ele = new TextNode();
        ele.text = str;
        this.children.push(ele);
        return this;
    }

    getChildren() {
        return this.children;
    }

    getStyle() {
        return this.style;
    }
}