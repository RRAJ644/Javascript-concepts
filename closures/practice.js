const createCounter = () => {
  let count = 0
  return () => {
    count++
    console.log(count)
  }
}

const counter = createCounter()
counter() // 1
counter() // 2
counter() // 3
counter() // 4
counter() // 5
counter() // 6

const createMultiplier = (multiplier) => (val) => multiplier * val

const double = createMultiplier(2)
console.log(double(5)) // 10

const triple = createMultiplier(3)
console.log(triple(5)) // 15

//private variables
function person(name, age) {
  let personName = name
  let personAge = age

  return {
    setName: (newName) => (personName = newName),
    setAge: (newAge) => (personAge = newAge),
    getName: () => personName,
    getAge: () => personAge,
  }
}

const person1 = person('Ritu', 25)
console.log(person1.getName())
person1.setName('Raj')
console.log(person1.getName())

console.log(person1.getAge())
person1.setAge(30)
console.log(person1.getAge())

// Memoize

function memoize(fn) {
  const cache = {}
  return function (...args) {
    const key = JSON.stringify(args)

    if (cache[key] !== undefined) {
      console.log('Returning cached result')
      return cache[key]
    }

    const result = fn(...args)
    cache[key] = result

    return result
  }
}

const add = (a, b) => a + b
const cachedAdd = memoize(add)

console.log(cachedAdd(1, 2))
console.log(cachedAdd(1, 2))
console.log(cachedAdd(2, 3))
console.log(cachedAdd(2, 3))

// Once

function once(func, ctx) {
  let ran
  return function () {
    if (func) {
      ran = func.apply(ctx || this, arguments)
      func = null
    }
    else{
      console.log("checked")
    }

    return ran
  }
}

const check = once(() => console.log('Checking Once'))

check()
check()
check()
