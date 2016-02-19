/* @flow */
type eventName = 'somethingChanged'
  | 'somethingHappened'
  | 'changed'
  | 'created'

type eventCallback = () => void

class Callbacks {
  _callbacks: { [key: eventName]: ?Array<eventCallback> };

  constructor () {
    this._callbacks = {}
  }

  on (name: eventName, callback: eventCallback) {
    if (!this._callbacks[name]) {
      this._callbacks[name] = [callback]
    } else {
      this._callbacks[name].push(callback)
    }
  }
}

export default Callbacks
