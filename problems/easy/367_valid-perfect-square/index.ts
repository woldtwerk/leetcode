/**
Given a positive integer num, return true if num is a perfect square or false otherwise.

A perfect square is an integer that is the square of an integer. In other words, it is the product of some integer with itself.

You must not use any built-in library function, such as sqrt.
 */
export function isPerfectSquare(num: number): boolean {
  if (num < 1) return false
  if (num === 1) return true
  
  return checkPrimeFactors(num, 2)
}

function checkPrimeFactors(n: number, f: number): boolean {
  if (n === 1) return true
  
  if (f * f > n) {
    return n === 1
  }
  
  let count = 0
  while (n % f === 0) {
    n /= f
    count++
  }
  if (count % 2 !== 0) return false
  return checkPrimeFactors(n, f + 1)
}
