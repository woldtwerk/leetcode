/*
An ugly number is a positive integer which does not have a prime factor other than 2, 3, and 5.

Given an integer n, return true if n is an ugly number.
 */

export function isUgly(n: number): boolean {
  if (n <= 0) return false
  let t = n
  while(t > 1) {
    if (t % 2 === 0)
      t = t / 2
    else if (t % 3 === 0)
      t = t / 3
    else if (t % 5 === 0)
      t = t / 5
    else
      return false
  }
  return true
}
