const outText = document.querySelector('.text')
const colorText = document.querySelector('.textColor')

const minPoint = 1016
const maxPoint = 1937
let cointer = 0
let result = 0

for (let i = minPoint; i <= maxPoint; i++) {
  if (i % 3 === 0 && i % 7 === 0) {
    if (i % 2 !== 0 && i % 5 !== 0) {
      ++cointer
      result = i
    }
  }
}
outText.textContent = `${cointer} вариантов. `
colorText.textContent = `Но выигрышный - ${result}`
