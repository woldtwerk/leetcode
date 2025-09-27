/**
Given an integer n, return true if it is a power of three. Otherwise, return false.

An integer n is a power of three, if there exists an integer x such that n == 3x.
 */
export function isPowerOfThree(n: number): boolean {
  if (n < 1) return false
  return n === 1 || isPowerOfThree(n /= 3)
}
