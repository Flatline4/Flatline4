import Body from './Elements/Body';
import Chain from './Chain';

export function Entry(start: (body: Body, children: Chain) => void) {
    var body = new Body();
    var chain = new Chain();

    start(body, chain);

    body.Children = chain.getChildren();
    body.generate();
}