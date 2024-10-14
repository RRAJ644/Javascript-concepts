var obj = { name: 'Ritu Raj Singh' }

function sayHello(age, profession) {
  return 'Hello ' + this.name + ' of age ' + age + ' is a ' + profession
}

console.log(sayHello.apply(obj, [22, 'Software Engineer']))

// polyfill

Function.prototype.customApply = function (context = {}, args=[]) {
  if (typeof this !== 'function') {
    throw new Error(this + "It's not callable")
  }

  if (Array.isArray(args)) {
    throw new TypeError('Error')
  }

  context.fn = this
  context.fn(...args)
}

