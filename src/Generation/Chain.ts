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
import H1 from './Elements/H1';
import H2 from './Elements/H2';
import H3 from './Elements/H3';
import H4 from './Elements/H4';
import H5 from './Elements/H5';
import H6 from './Elements/H6';
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
import Tbody from './Elements/Tbody';
import Td from './Elements/Td';
import Text from './Elements/TextNode';
import Textarea from './Elements/Textarea';
import Th from './Elements/Th';
import Thead from './Elements/Thead';
import Time from './Elements/Time';
import Title from './Elements/Title';
import Tr from './Elements/Tr';
import Ul from './Elements/Ul';
import Var from './Elements/Var';
import Video from './Elements/Video';
import { IElement } from './Element';
import { INodeElement } from './Element';
import { DomElement } from './DomElement';

export default class Chain<T> {
    public parent: T;
    private children: (IElement | INodeElement)[];
    private current: (IElement | INodeElement);

    constructor(parent: T){
        this.parent = parent;
        this.children = [];
        this.current = null;
    }

    a(children?: (element: A, style: Styles, children: Chain<A>) => void) {
        const ele = new A();
        const chain = new Chain(ele);
        if (children) {
            children(ele, ele.style, chain);
        }
        ele.children = chain.getChildren();
        this.children.push(ele);
        return this;
    }

    article(children?: (element: Article, style: Styles, children: Chain<Article>) => void) {
        const ele = new Article();
        const chain = new Chain(ele);
        if (children) {
            children(ele, ele.style, chain);
        }
        ele.children = chain.getChildren();
        this.children.push(ele);
        return this;
    }

    aside(children?: (element: Aside, style: Styles, children: Chain<Aside>) => void) {
        const ele = new Aside();
        const chain = new Chain(ele);
        if (children) {
            children(ele, ele.style, chain);
        }
        ele.children = chain.getChildren();
        this.children.push(ele);
        return this;
    }

    audio(children?: (element: Audio, style: Styles, children: Chain<Audio>) => void) {
        const ele = new Audio();
        const chain = new Chain(ele);
        if (children) {
            children(ele, ele.style, chain);
        }
        ele.children = chain.getChildren();
        this.children.push(ele);
        return this;
    }

    b(children?: (element: B, style: Styles, children: Chain<B>) => void) {
        const ele = new B();
        const chain = new Chain(ele);
        if (children) {
            children(ele, ele.style, chain);
        }
        ele.children = chain.getChildren();
        this.children.push(ele);
        return this;
    }

    br(children?: (element: Br, style: Styles, children: Chain<Br>) => void) {
        const ele = new Br();
        const chain = new Chain(ele);
        if (children) {
            children(ele, ele.style, chain);
        }
        this.children.push(ele);
        return this;
    }

    button(children?: (element: Button, style: Styles, children: Chain<Button>) => void) {
        const ele = new Button();
        const chain = new Chain(ele);
        if (children) {
            children(ele, ele.style, chain);
        }
        ele.children = chain.getChildren();
        this.children.push(ele);
        return this;
    }

    canvas(children?: (element: Canvas, style: Styles, children: Chain<Canvas>) => void) {
        const ele = new Canvas();
        const chain = new Chain(ele);
        if (children) {
            children(ele, ele.style, chain);
        }
        ele.children = chain.getChildren();
        this.children.push(ele);
        return this;
    }

    code(children?: (element: Code, style: Styles, children: Chain<Code>) => void) {
        const ele = new Code();
        const chain = new Chain(ele);
        if (children) {
            children(ele, ele.style, chain);
        }
        ele.children = chain.getChildren();
        this.children.push(ele);
        return this;
    }

    col(children?: (element: Col, style: Styles, children: Chain<Col>) => void) {
        const ele = new Col();
        const chain = new Chain(ele);
        if (children) {
            children(ele, ele.style, chain);
        }
        ele.children = chain.getChildren();
        this.children.push(ele);
        return this;
    }

    details(children?: (element: Details, style: Styles, children: Chain<Details>) => void) {
        const ele = new Details();
        const chain = new Chain(ele);
        if (children) {
            children(ele, ele.style, chain);
        }
        ele.children = chain.getChildren();
        this.children.push(ele);
        return this;
    }

    dialog(children?: (element: Dialog, style: Styles, children: Chain<Dialog>) => void) {
        const ele = new Dialog();
        const chain = new Chain(ele);
        if (children) {
            children(ele, ele.style, chain);
        }
        ele.children = chain.getChildren();
        this.children.push(ele);
        return this;
    }

    div(children?: (element: Div, style: Styles, children: Chain<Div>) => void) {
        const ele = new Div();
        const chain = new Chain(ele);
        if (children) {
            children(ele, ele.style, chain);
        }
        ele.children = chain.getChildren();
        this.children.push(ele);
        return this;
    }

    em(children?: (element: Em, style: Styles, children: Chain<Em>) => void) {
        const ele = new Em();
        const chain = new Chain(ele);
        if (children) {
            children(ele, ele.style, chain);
        }
        ele.children = chain.getChildren();
        this.children.push(ele);
        return this;
    }

    embed(children?: (element: Embed, style: Styles, children: Chain<Embed>) => void) {
        const ele = new Embed();
        const chain = new Chain(ele);
        if (children) {
            children(ele, ele.style, chain);
        }
        ele.children = chain.getChildren();
        this.children.push(ele);
        return this;
    }

    figcaption(children?: (element: Figcaption, style: Styles, children: Chain<Figcaption>) => void) {
        const ele = new Figcaption();
        const chain = new Chain(ele);
        if (children) {
            children(ele, ele.style, chain);
        }
        ele.children = chain.getChildren();
        this.children.push(ele);
        return this;
    }

    figure(children?: (element: Figure, style: Styles, children: Chain<Figure>) => void) {
        const ele = new Figure();
        const chain = new Chain(ele);
        if (children) {
            children(ele, ele.style, chain);
        }
        ele.children = chain.getChildren();
        this.children.push(ele);
        return this;
    }

    footer(children?: (element: Footer, style: Styles, children: Chain<Footer>) => void) {
        const ele = new Footer();
        const chain = new Chain(ele);
        if (children) {
            children(ele, ele.style, chain);
        }
        ele.children = chain.getChildren();
        this.children.push(ele);
        return this;
    }

    form(children?: (element: Form, style: Styles, children: Chain<Form>) => void) {
        const ele = new Form();
        const chain = new Chain(ele);
        if (children) {
            children(ele, ele.style, chain);
        }
        ele.children = chain.getChildren();
        this.children.push(ele);
        return this;
    }

    h1(children?: (element: H1, style: Styles, children: Chain<H1>) => void) {
        const ele = new H1();
        const chain = new Chain(ele);
        if (children) {
            children(ele, ele.style, chain);
        }
        ele.children = chain.getChildren();
        this.children.push(ele);
        return this;
    }

    h2(children?: (element: H2, style: Styles, children: Chain<H2>) => void) {
        const ele = new H2();
        const chain = new Chain(ele);
        if (children) {
            children(ele, ele.style, chain);
        }
        ele.children = chain.getChildren();
        this.children.push(ele);
        return this;
    }

    h3(children?: (element: H3, style: Styles, children: Chain<H3>) => void) {
        const ele = new H3();
        const chain = new Chain(ele);
        if (children) {
            children(ele, ele.style, chain);
        }
        ele.children = chain.getChildren();
        this.children.push(ele);
        return this;
    }

    h4(children?: (element: H4, style: Styles, children: Chain<H4>) => void) {
        const ele = new H4();
        const chain = new Chain(ele);
        if (children) {
            children(ele, ele.style, chain);
        }
        ele.children = chain.getChildren();
        this.children.push(ele);
        return this;
    }

    h5(children?: (element: H5, style: Styles, children: Chain<H5>) => void) {
        const ele = new H5();
        const chain = new Chain(ele);
        if (children) {
            children(ele, ele.style, chain);
        }
        ele.children = chain.getChildren();
        this.children.push(ele);
        return this;
    }

    h6(children?: (element: H6, style: Styles, children: Chain<H6>) => void) {
        const ele = new H6();
        const chain = new Chain(ele);
        if (children) {
            children(ele, ele.style, chain);
        }
        ele.children = chain.getChildren();
        this.children.push(ele);
        return this;
    }

    head(children?: (element: Head, style: Styles, children: Chain<Head>) => void) {
        const ele = new Head();
        const chain = new Chain(ele);
        if (children) {
            children(ele, ele.style, chain);
        }
        ele.children = chain.getChildren();
        this.children.push(ele);
        return this;
    }

    header(children?: (element: Header, style: Styles, children: Chain<Header>) => void) {
        const ele = new Header();
        const chain = new Chain(ele);
        if (children) {
            children(ele, ele.style, chain);
        }
        ele.children = chain.getChildren();
        this.children.push(ele);
        return this;
    }

    hr(children?: (element: Hr, style: Styles, children: Chain<Hr>) => void) {
        const ele = new Hr();
        const chain = new Chain(ele);
        if (children) {
            children(ele, ele.style, chain);
        }
        this.children.push(ele);
        return this;
    }

    img(children?: (element: Img, style: Styles, children: Chain<Img>) => void) {
        const ele = new Img();
        const chain = new Chain(ele);
        if (children) {
            children(ele, ele.style, chain);
        }
        ele.children = chain.getChildren();
        this.children.push(ele);
        return this;
    }

    input(children?: (element: Input, style: Styles, children: Chain<Input>) => void) {
        const ele = new Input();
        const chain = new Chain(ele);
        if (children) {
            children(ele, ele.style, chain);
        }
        ele.children = chain.getChildren();
        this.children.push(ele);
        return this;
    }

    label(children?: (element: Label, style: Styles, children: Chain<Label>) => void) {
        const ele = new Label();
        const chain = new Chain(ele);
        if (children) {
            children(ele, ele.style, chain);
        }
        ele.children = chain.getChildren();
        this.children.push(ele);
        return this;
    }

    li(children?: (element: Li, style: Styles, children: Chain<Li>) => void) {
        const ele = new Li();
        const chain = new Chain(ele);
        if (children) {
            children(ele, ele.style, chain);
        }
        ele.children = chain.getChildren();
        this.children.push(ele);
        return this;
    }

    link(children?: (element: Link, style: Styles, children: Chain<Link>) => void) {
        const ele = new Link();
        const chain = new Chain(ele);
        if (children) {
            children(ele, ele.style, chain);
        }
        ele.children = chain.getChildren();
        this.children.push(ele);
        return this;
    }

    main(children?: (element: Main, style: Styles, children: Chain<Main>) => void) {
        const ele = new Main();
        const chain = new Chain(ele);
        if (children) {
            children(ele, ele.style, chain);
        }
        ele.children = chain.getChildren();
        this.children.push(ele);
        return this;
    }

    map(children?: (element: Map, style: Styles, children: Chain<Map>) => void) {
        const ele = new Map();
        const chain = new Chain(ele);
        if (children) {
            children(ele, ele.style, chain);
        }
        ele.children = chain.getChildren();
        this.children.push(ele);
        return this;
    }

    mark(children?: (element: Mark, style: Styles, children: Chain<Mark>) => void) {
        const ele = new Mark();
        const chain = new Chain(ele);
        if (children) {
            children(ele, ele.style, chain);
        }
        ele.children = chain.getChildren();
        this.children.push(ele);
        return this;
    }

    menu(children?: (element: Menu, style: Styles, children: Chain<Menu>) => void) {
        const ele = new Menu();
        const chain = new Chain(ele);
        if (children) {
            children(ele, ele.style, chain);
        }
        ele.children = chain.getChildren();
        this.children.push(ele);
        return this;
    }

    meta(children?: (element: Meta, style: Styles, children: Chain<Meta>) => void) {
        const ele = new Meta();
        const chain = new Chain(ele);
        if (children) {
            children(ele, ele.style, chain);
        }
        ele.children = chain.getChildren();
        this.children.push(ele);
        return this;
    }

    nav(children?: (element: Nav, style: Styles, children: Chain<Nav>) => void) {
        const ele = new Nav();
        const chain = new Chain(ele);
        if (children) {
            children(ele, ele.style, chain);
        }
        ele.children = chain.getChildren();
        this.children.push(ele);
        return this;
    }

    /*
    object(children?: (element: ObjectNode, style: Styles, children: Chain<ObjectNode>) => void) {
        const ele = new ObjectNode();
        const chain = new Chain(ele);
        if (children) {
            children(ele, ele.style, chain);
        }
        ele.children = chain.getChildren();
        this.children.push(ele);
        return this;
    }
    */

    ol(children?: (element: Ol, style: Styles, children: Chain<Ol>) => void) {
        const ele = new Ol();
        const chain = new Chain(ele);
        if (children) {
            children(ele, ele.style, chain);
        }
        ele.children = chain.getChildren();
        this.children.push(ele);
        return this;
    }

    p(children?: (element: P, style: Styles, children: Chain<P>) => void) {
        const ele = new P();
        const chain = new Chain(ele);
        if (children) {
            children(ele, ele.style, chain);
        }
        ele.children = chain.getChildren();
        this.children.push(ele);
        return this;
    }

    picture(children?: (element: Picture, style: Styles, children: Chain<Picture>) => void) {
        const ele = new Picture();
        const chain = new Chain(ele);
        if (children) {
            children(ele, ele.style, chain);
        }
        ele.children = chain.getChildren();
        this.children.push(ele);
        return this;
    }

    q(children?: (element: Q, style: Styles, children: Chain<Q>) => void) {
        const ele = new Q();
        const chain = new Chain(ele);
        if (children) {
            children(ele, ele.style, chain);
        }
        ele.children = chain.getChildren();
        this.children.push(ele);
        return this;
    }

    script(children?: (element: Script, style: Styles, children: Chain<Script>) => void) {
        const ele = new Script();
        const chain = new Chain(ele);
        if (children) {
            children(ele, ele.style, chain);
        }
        ele.children = chain.getChildren();
        this.children.push(ele);
        return this;
    }

    section(children?: (element: Section, style: Styles, children: Chain<Section>) => void) {
        const ele = new Section();
        const chain = new Chain(ele);
        if (children) {
            children(ele, ele.style, chain);
        }
        ele.children = chain.getChildren();
        this.children.push(ele);
        return this;
    }

    small(children?: (element: Small, style: Styles, children: Chain<Small>) => void) {
        const ele = new Small();
        const chain = new Chain(ele);
        if (children) {
            children(ele, ele.style, chain);
        }
        ele.children = chain.getChildren();
        this.children.push(ele);
        return this;
    }

    source(children?: (element: Source, style: Styles, children: Chain<Source>) => void) {
        const ele = new Source();
        const chain = new Chain(ele);
        if (children) {
            children(ele, ele.style, chain);
        }
        ele.children = chain.getChildren();
        this.children.push(ele);
        return this;
    }

    span(children?: (element: Span, style: Styles, children: Chain<Span>) => void) {
        const ele = new Span();
        const chain = new Chain(ele);
        if (children) {
            children(ele, ele.style, chain);
        }
        ele.children = chain.getChildren();
        this.children.push(ele);
        return this;
    }

    strong(children?: (element: Strong, style: Styles, children: Chain<Strong>) => void) {
        const ele = new Strong();
        const chain = new Chain(ele);
        if (children) {
            children(ele, ele.style, chain);
        }
        ele.children = chain.getChildren();
        this.children.push(ele);
        return this;
    }

    style(children?: (element: Style, style: Styles, children: Chain<Style>) => void) {
        const ele = new Style();
        const chain = new Chain(ele);
        if (children) {
            children(ele, ele.style, chain);
        }
        ele.children = chain.getChildren();
        this.children.push(ele);
        return this;
    }

    summary(children?: (element: Summary, style: Styles, children: Chain<Summary>) => void) {
        const ele = new Summary();
        const chain = new Chain(ele);
        if (children) {
            children(ele, ele.style, chain);
        }
        ele.children = chain.getChildren();
        this.children.push(ele);
        return this;
    }

    table(children?: (element: Table, style: Styles, children: Chain<Table>) => void) {
        const ele = new Table();
        const chain = new Chain(ele);
        if (children) {
            children(ele, ele.style, chain);
        }
        ele.children = chain.getChildren();
        this.children.push(ele);
        return this;
    }

    tbody(children?: (element: Tbody, style: Styles, children: Chain<Tbody>) => void) {
        const ele = new Tbody();
        const chain = new Chain(ele);
        if (children) {
            children(ele, ele.style, chain);
        }
        ele.children = chain.getChildren();
        this.children.push(ele);
        return this;
    }

    td(children?: (element: Td, style: Styles, children: Chain<Td>) => void) {
        const ele = new Td();
        const chain = new Chain(ele);
        if (children) {
            children(ele, ele.style, chain);
        }
        ele.children = chain.getChildren();
        this.children.push(ele);
        return this;
    }

    text(value: string) {
        const ele = new Text();
        ele.text = value;
        this.children.push(ele);
        return this;
    }

    textarea(children?: (element: Textarea, style: Styles, children: Chain<Textarea>) => void) {
        const ele = new Textarea();
        const chain = new Chain(ele);
        if (children) {
            children(ele, ele.style, chain);
        }
        ele.children = chain.getChildren();
        this.children.push(ele);
        return this;
    }

    th(children?: (element: Th, style: Styles, children: Chain<Th>) => void) {
        const ele = new Th();
        const chain = new Chain(ele);
        if (children) {
            children(ele, ele.style, chain);
        }
        ele.children = chain.getChildren();
        this.children.push(ele);
        return this;
    }

    thead(children?: (element: Thead, style: Styles, children: Chain<Thead>) => void) {
        const ele = new Thead();
        const chain = new Chain(ele);
        if (children) {
            children(ele, ele.style, chain);
        }
        ele.children = chain.getChildren();
        this.children.push(ele);
        return this;
    }

    time(children?: (element: Time, style: Styles, children: Chain<Time>) => void) {
        const ele = new Time();
        const chain = new Chain(ele);
        if (children) {
            children(ele, ele.style, chain);
        }
        ele.children = chain.getChildren();
        this.children.push(ele);
        return this;
    }

    title(children?: (element: Title, style: Styles, children: Chain<Title>) => void) {
        const ele = new Title();
        const chain = new Chain(ele);
        if (children) {
            children(ele, ele.style, chain);
        }
        ele.children = chain.getChildren();
        this.children.push(ele);
        return this;
    }

    tr(children?: (element: Tr, style: Styles, children: Chain<Tr>) => void) {
        const ele = new Tr();
        const chain = new Chain(ele);
        if (children) {
            children(ele, ele.style, chain);
        }
        ele.children = chain.getChildren();
        this.children.push(ele);
        return this;
    }

    ul(children?: (element: Ul, style: Styles, children: Chain<Ul>) => void) {
        const ele = new Ul();
        const chain = new Chain(ele);
        if (children) {
            children(ele, ele.style, chain);
        }
        ele.children = chain.getChildren();
        this.children.push(ele);
        return this;
    }

    /*
    var(children?: (element: Var, style: Styles, children: Chain<Var>) => void) {
        const ele = new Var();
        const chain = new Chain(ele);
        if (children) {
            children(ele, ele.style, chain);
        }
        ele.children = chain.getChildren();
        this.children.push(ele);
        return this;
    }
    */

    video(children?: (element: Video, style: Styles, children: Chain<Video>) => void) {
        const ele = new Video();
        const chain = new Chain(ele);
        if (children) {
            children(ele, ele.style, chain);
        }
        ele.children = chain.getChildren();
        this.children.push(ele);
        return this;
    }

    getChildren() {
        return this.children;
    }
}