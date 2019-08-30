// https://www.codewars.com/kata/5208f99aee097e6552000148/train/javascript

// complete the function
function solution(string) {
    return string.split('').map(function(l) {
  return l === l.toUpperCase() ? (" " + l) : l
  }).join('')
}
