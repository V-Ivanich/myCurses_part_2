console.log(isEqualSymbols('адрес', 'среда')) // true
console.log(isEqualSymbols('ноутбук', 'программист')) // false
console.log(isEqualSymbols('google', 'eelgog')) // false

function isEqualSymbols(str1, str2) {
  let res = false
  const arrayStringOne = [...str1]
  const arrayStringTwo = [...str2]
  if (arrayStringOne.length === arrayStringTwo.length) {
    for (let item of arrayStringOne) {
      res = arrayStringTwo.includes(item)
      if (!res) break
    }
    arrayStringOne.forEach(elem => {
      const temp1 = arrayStringOne.filter(item => item === elem)
      const temp2 = arrayStringTwo.filter(item => item === elem)
      if (temp1.length !== temp2.length) {
        res = false
      }
    })
  }
  return res
}

//! -- task-3
console.log('--------3')
console.log(unique([1, 1, 2, 2, 4, 2, 3, 7, 3])) // => [1, 2, 4, 3, 7]

function unique(arrayMass) {
  return [...new Set(arrayMass)]
}

//!---task-4
console.log('--------4')
console.log(isPalindrome('racecar')) // true
console.log(isPalindrome('programmer')) // false

function isPalindrome(str) {
  const arrayStr = [...str].reverse().join('')
  return arrayStr === str
}
