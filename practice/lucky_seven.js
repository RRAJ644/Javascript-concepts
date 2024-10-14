function lucky_sevens(arr) {
  for (let i = 0; i < arr.length - 2; i++) {
    if (arr[i] + arr[i + 1] + arr[i + 2] === 7) {
      return true
    }
  }
  return false
}

console.log(lucky_sevens([2, 1, 5, 1, 0]))
