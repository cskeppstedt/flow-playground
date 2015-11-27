/* @flow */
import Posten from 'posten/posten'

var posten = new Posten({
  origin: '*',
  console: console,
  debug: true,
  frame: { contentWindow: window }
})

posten.onMessage = (error, message) => {
  if (error == null) {
    console.log('everything is fine', message);
  } else {
    console.log('error occurred', error.message);
  }
}

