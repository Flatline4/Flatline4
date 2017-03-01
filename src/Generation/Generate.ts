import Body from './Elements/Body'
import Chain from './Chain'

export function Entry (start: (children: Chain<Body>) => void) {
  var body = new Body()
  var chain = new Chain(body)

  start(chain)

  body.children = chain.getChildren()
  body.generate()
}
