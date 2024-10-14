const user = {
  name: 'Raj',
  age: 24,
  isTotallyAwesome: true,
}

for (const [key, val] of Object.entries(user)) {
  console.log(key, val)
}

// a will be at first place only but with the last specified value
const obj = {
  a: 'one',
  b: 'two',
  a: 'three',
}

console.log(obj)

// Create a function multiplyByTwo(obj) that multiplies all numeric property values of nums by 2

let nums = {
  a: 100,
  b: 200,
  title: 'My nums',
}

const multiplyByTwo = (obj) => {
  for (const key in obj) {
    if (typeof obj[key] === 'number') {
      obj[key] = obj[key] * 2
    }
  }

  return obj
}

console.log(multiplyByTwo(nums))

const a = {}
const b = { key: 'b' }
const c = { key: 'c' }

a[b] = 123
a[c] = 456

console.log(a[b]) //456 {[object object]: 456}

// JSON.stringify and JSON.parse

const user1 = {
  name: 'Piyush',
  age: 24,
}

console.log(JSON.parse(JSON.stringify(user1)))

const settings = {
  username: 'Piyush',
  level: 19,
  health: 90,
}

// only "level" and "health" in settings objects can be stringified
const data = JSON.stringify(settings, ['level', 'health'])
console.log(data)

const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2
  },
  perimeter: () => 2 * Math.PI * this.radius,
}

// console.log(shape.diameter())

console.log({ a: 1 } == { a: 1 }) //false both are pointing to different memory space
// console.log({ a: 1 } === { a: 1 })

let person = { name: 'Rituraj' }
const members = [person]
person = null
console.log(members)

// Deep and shallow copy

// One object holds the reference to the another object
// this is shallow copy

// when we completely clone an object into another
// it is known as deep copy

// clone obj

let sample = {
  name: 'raj',
  age: 24,
}

const objClone = Object.assign({}, sample)
objClone.name = 'Piyush'
console.log(sample, objClone)

// another way

const objClone1 = JSON.parse(JSON.stringify(sample))
objClone1.name = 'Abhay'
console.log(sample, objClone1)

// destructure
