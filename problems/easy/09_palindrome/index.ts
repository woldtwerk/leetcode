/*
Given an integer x, return true if x is a , and false otherwise.
*/

export function isPalindrome(x: number): boolean {
  let ref = 0
  const tmp = x

  while (x > 0) {
    ref = ref * 10 + (x % 10)
    x = Math.floor(x / 10)
  }

  return ref === tmp
}
