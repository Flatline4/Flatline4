import Body from './Elements/Body';

export function Entry(start: (body: Body) => void) {
    var body = new Body();

    start(body);

    body.generate();
}