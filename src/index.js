module.exports = function check(str, bracketsConfig) {
  let flag = true

  bracketsConfig.forEach((element, index) => {
    let occurs = countOccur(str, element, bracketsConfig)
    if (occurs[0] > 0 || occurs[2] % 2 != 0 ) flag = false
  })
  return flag
}


function countOccur(str, element, config) {
  return str.split('').reduce((acc, curr, ind) => {
    if (element[0] == curr && acc[1] % 2 == 0) {
      acc[0] += 1
      if (element[0] == element[1]) acc[0] -= 1
    }
    else if ((element[1] == curr || element[1] == element[0]) && ind < str.length && acc[0] > 0 && acc[1] % 2 == 0) {
      acc[0] -= 1
    }
    else if (!element.includes(curr)) {
      acc[1] += 1
    }
    else {
      acc[2] += 1
    }
    return acc;
  }, [0, 0, 0])
}
