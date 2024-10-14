var obj = { name: 'Ritu Raj Singh' }

function sayHello(age, profession) {
  return 'Hello ' + this.name + ' of age ' + age + ' is a ' + profession
}

const bindFunc = sayHello.bind(obj)
console.log(bindFunc(23, 'Software Engineer'))
