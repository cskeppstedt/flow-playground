/* @flow */

export default class Queue<T> {
  _queue: Array<T>;

  constructor () {
    this._queue = []
  }

  enqueue (item: T) {
    this._queue.push(item)
  }

  dequeue (): ?T {
    return this._queue.shift()
  }

  size (): number {
    return this._queue.length
  }
}
