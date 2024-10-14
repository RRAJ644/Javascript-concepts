function f(a) {
  return function (b) {
    return `${a} ${b}`
  }
}

console.log(f(5)(6))

const sum = (a) => (b) => a + b
console.log(sum(1)(2))

function evaluate(operation) {
  return function (a) {
    return function (b) {
      if (operation === 'sum') {
        return a + b
      } else if (operation === 'multiply') {
        return a * b
      } else if (operation === 'subtract') {
        return a - b
      } else if (operation === 'divide') {
        return a / b
      }
    }
  }
}

console.log(evaluate('sum')(10)(20))

// Infinite currying

function add(a) {
  return function (b) {
    if (b) {
      return add(a + b)
    }
  }
}

console.log(add(5)(2)(10)(1)(2)())

// Currying vs partial application

function sum1(a) {
  return function (b, c) {
    return a + b + c
  }
}

const x = sum1(1)
console.log(x(5, 6))

// function updateElementText(id) {
//   return function (content) {
//     document.querySelector('#' + id).textContent = content
//   }
// }

// const updateHeader = updateElementText('heading')
// updateHeader('Subscribe to Roadside coder')

// Curry implementation

function curry(func) {
  return function curriedFunc(...args) {
    if (func.length <= args.length) {
      return func(...args)
    } else {
      return function (...next) {
        return curriedFunc(...args, ...next)
      }
    }
  }
}

function multiply(a, b, c) {
  return a * b * c;
}

const curriedMultiply = curry(multiply);

console.log(curriedMultiply(2)(3)(4)); // Outputs: 24
console.log(curriedMultiply(2, 3)(4)); // Outputs: 24
console.log(curriedMultiply(2)(3, 4)); // Outputs: 24
console.log(curriedMultiply(2, 3, 4)); // Outputs: 24
