var name = 'name'

function subscribe() {
  var name = 'dummy'
  function displayName() {
    console.log(name)
  }

  displayName()
}

subscribe()

function makeFunc() {
  var name = 'second'
  function displayName() {
    console.log(name)
  }
  return displayName
}

const callFunc = makeFunc()

callFunc()

function createBase() {
  return function (num) {
    return num + 6
  }
}

var addSix = createBase(6)
console.log(addSix(10))
console.log(addSix(21))

function find(index) {
  let a = []
  for (let i = 0; i < 1000000; i++) {
    a[i] = i * i
  }
  return function (index) {
    console.log(a[index])
  }
}

console.time('6')
find(6)
console.timeEnd('6')

console.time('12')
find(12)
console.timeEnd('12')

console.time('10')
const closure = find()
closure(6)
console.timeEnd('10')

function test() {
  for (var i = 0; i < 3; i++) {
    setTimeout(function log() {
      console.log(i)
    }, i * 1000)
  }
}

// test() // 3  3 3 (var has function scope and setTimeOut runs when everything is executed)

function test1() {
  for (let i = 0; i < 3; i++) {
    setTimeout(function log() {
      console.log(i)
    }, i * 1000)
  }
}

test1()

// private counter

function counter() {
  var _counter = 0
  function add(increment) {
    _counter += increment
  }

  function retrieve() {
    return 'Counter = ' + _counter
  }

  return {
    add,
    retrieve,
  }
}

const c = counter()

c.add(5)
c.add(10)
console.log(c.retrieve())

// Module pattern
let xyz = (function () {
  function privateOperation() {}

  return {
    publicMethod: function () {
      // call the private method here
    },
  }
})()

// Making this code only run once

let view
function likeTheVideo() {
  let called = 0

  return function () {
    if (called > 0) {
      console.log('Already Subscribed')
    } else {
      view = 'Roadside Coder'
      console.log('Subscribe to', view)
      called++
    }
  }
}

let isSubscribed = likeTheVideo()
isSubscribed()
isSubscribed()
isSubscribed()
isSubscribed()
isSubscribed()

// Once polyfill

function once(func, ctx) {
  let ran
  return function () {
    if (func) {
      ran = func.apply(ctx || this, arguments)
      func = null
    }

    return ran
  }
}

// const hello = once(() => console.log('hello'))
// hello()
// hello()
// hello()
// hello()

// Memoize polyfill
const clumsySquare = (num1, num2) => {
  for (let i = 0; i <= 1000000; i++) {}
  return num1 * num2
}

console.time('1')
console.log(clumsySquare(9467, 7649))
console.timeEnd('1')


console.time('2')
console.log(clumsySquare(9467, 7649))
console.timeEnd('2')
