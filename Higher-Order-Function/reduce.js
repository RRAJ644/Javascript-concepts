// reduce method reduces an array of values down
// to just one value. To get the output value

// arr.reduce((acc, curr, index, array) => {}, initialValue)

Array.prototype.customReduce = function (cb, initialValue) {
  let accumulator = initialValue
  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i]
  }
  return accumulator
}

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const sum = nums.customReduce((acc, curr) => acc + curr, 0)
console.log(sum)
