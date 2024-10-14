// 'this' keyword in js (implicit binding)

let user = {
  name: 'raj',
  age: 24,
  childObj: {
    newName: 'Abhay',
    getData() {
      console.log(this.newName + ' and ' + this.name)
    },
  },
}

user.childObj.getData()

// In function declaration this keyword point towards the immediate parent
// In arrow function it point towards the window object

// what is the output

function makeUser() {
  return {
    name: 'John',
    ref: this,
  }
}

let user1 = makeUser()

// console.log(user1.ref.name) //undefined because this in function points towards the window object

// Fix the above function to get the name from user.ref.name
function makeUser() {
  return {
    name: 'John',
    ref() {
      return this
    },
  }
}

let user2 = makeUser()

console.log(user2.ref().name)

const user3 = {
  name: 'Abhay Garg',
  logMessage() {
    console.log(this.name)
  },
}

setTimeout(user3.logMessage, 1000) //undefined -> setTimeout is using logMessage as callback rather than a method so logMessage will be copied inside the timeOut and will no longer have access to user3

//fixing the above

const user4 = {
  name: 'Abhay Garg fixed',
  logMessage() {
    console.log(this.name)
  },
}

setTimeout(() => {
  user4.logMessage()
}, 1000)

// Create object calculator

// let calculator = {
//   read() {
//     this.a = prompt('a = ', 0)
//     this.b = prompt('b = ', 0)
//   },

//   sum() {
//     return this.a + this.b
//   },

//   mul() {
//     return this.a * this.b
//   },
// }

// calculator.read()
// calculator.sum()
// calculator.mul()

var length = 4

function callback() {
  console.log(this.length)
}

const obj1 = {
  length: 5,
  method(fn) {
    fn()
  },
}

const obj2 = {
  length: 5,
  method(fn) {
    arguments[0]() // it will print 3
  },
}

obj2.method(callback, 2, 3)

// Implement calc

const calc = {
  total: 0,

  add(val) {
    this.total += val
    return this
  },

  multiply(val) {
    this.total *= val
    return this
  },

  subtract(val) {
    this.total -= val
    return this
  },
}
const result = calc.add(10).multiply(5).subtract(10)
console.log(result.total, '====')
