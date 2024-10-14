// Call Bind and Apply (Explicit Binding)

var obj = { name: 'raj' }

function sayHello(age) {
  return 'Hello ' + this.name + ' ' + age
}

console.log(sayHello.call(obj, 23))

// polyfill

Function.prototype.customCall = function (context = {}, ...args) {
  if (typeof this !== 'function') {
    throw new Error(this + "It's not callable")
  }

  context.fn = this
  context.fn(...args)
}


