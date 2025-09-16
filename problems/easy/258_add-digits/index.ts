/*
Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.
 */

export function addDigits(num: number): number {
  let tmp = num
  while (tmp >= 10) {
    tmp = tmp.toString().split('').reduce((a, c) => +a + +c, 0)
  }
  return tmp
}
