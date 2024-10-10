// Map method is used for creating a new array
// from an existing one, applying
// a function to each one of the elements of the first array

// Array.map((element, index, array) => {})

Array.prototype.customMap = function (cb) {
  let temp = []
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this))
  }
  return temp
}

const arr = [1, 2, 3, 4, 5]
const ans = arr.customMap((e) => e + 1)
console.log(ans)
