// filter method takes each element in an array and
// it applies a conditional statement against it.
// If this conditional returns true, the element gets
// pushed to the output array. If the condition returns false,
// the element does not get pushed to the output array.

// Array.filter((element, index, array) => {})

Array.prototype.customFilter = function (cb) {
  let temp = []
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      temp.push(this[i])
    }
  }
  return temp
}

const arr = [1, 2, 3, 4, 5, 6]
const ans = arr.filter((num) => num % 2 === 0)
console.log(ans)
