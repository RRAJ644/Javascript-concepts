// function declaration / statement / definition

function sqaure(n) {
  return n * n
}

sqaure()

// function expression / anonymous function

const cube = function (n) {
  return n * n * n
}

cube()

// First class citizens --> In a language where function can be treated as a variable and can be passed into arguments/ params, returned from functions

function add(a, b) {
  return a + b
}

function displayAddition(fn) {
  console.log('Addition is ' + fn(10, 15))
}

// displayAddition(add)

// IIFE -> Immediately invoked function expression

;(function sqaure1(n) {
  console.log(n * n)
})(5)
