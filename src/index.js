module.exports = function multiply(first, second) {
  firstArr = first.split('').reverse()
  secondArr = second.split('').reverse()

  let result = []

  for (let i = 0; i < secondArr.length; i++) {  
    for (let j = 0; j < firstArr.length; j++) {
      if (typeof result[i + j] === 'undefined')  result[i + j] = 0
      
      result[i + j] += parseInt(firstArr[j]) * parseInt(secondArr[i])
    }
  }

  for (let i = 0; i < result.length; i++) {  
    if (result[i] >= 10) {
      if (typeof result[i + 1] === 'undefined')  result[i + 1] = 0
      
      result[i + 1] += Math.floor(result[i] / 10)      
      result[i] = result[i] % 10
    }  
  }  
  return result.reverse().join('')
}
