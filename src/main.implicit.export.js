/* @flow */
import Posten from 'posten/posten.implicit.export'

var posten = new Posten({
  origin: '*',
  console: console,
  debug: false,
  target: window
})

posten.onMessage = (error, message) => {
  if (error == null) {
    console.log('everything is fine', message);
  } else {
    console.log('error occurred', error.message);
  }
}
