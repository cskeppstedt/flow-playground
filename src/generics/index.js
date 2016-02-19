/* @flow */
import MyDep from './my-dep'
import Callbacks from './callbacks'
import Queue from './queue'

const x = new Callbacks()
const foos: Queue<string> = new Queue()
const q: Queue<number> = new Queue()

foos.enqueue('3')
const f = foos.dequeue()

if (f) {
  console.log(f)
}

q.enqueue(16)
q.enqueue(4)
q.enqueue(6)

var something: ?number = q.dequeue()

if (something) {
  console.log(15 * something)
}

while (q.size() > 0) {
  console.log(q.dequeue())
}

x.on('created', () => {
  console.log('xaxaxa')
})

export default function (input: string): string {
  const transformed = input.toUpperCase()

  MyDep.log({
    type: 'error',
    severity: true,
    message: 'foobar'
  })

  return transformed
}
