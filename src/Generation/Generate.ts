import Page from './Page';

export function Entry(start: (body: Page) => void) {
    var body = new Page(null);

    start(body);
    
    var docBody = document.getElementsByTagName('body');
    if (docBody.length != 1)
        throw new Error('There can only be one Body');

    var actualBody = docBody[0];

    body.generate(actualBody);
}