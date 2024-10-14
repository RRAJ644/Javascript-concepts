var obj = { name: 'Ritu Raj Singh' }

function sayHello(age, profession) {
  return 'Hello ' + this.name + ' of age ' + age + ' is a ' + profession
}

console.log(sayHello.apply(obj, [22, 'Software Engineer']))
