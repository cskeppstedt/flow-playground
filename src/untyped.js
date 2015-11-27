import Posten from 'posten'

function adder(a, b) {
  return a * b;
}

console.log(adder(3, '5'));
var w = window;

var posten = new Posten()

posten.onMessage = (error, message, original) => {
  if (error == null) {
    console.log('everything is fine', message);
  } else {
    console.log('error occurred', error.toString());
  }
}
