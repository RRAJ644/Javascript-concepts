// Call Bind and Apply (Explicit Binding)

var obj = { name: 'raj' }

function sayHello(age) {
  return 'Hello ' + this.name +" "+ age
}

console.log(sayHello.call(obj, 23))

