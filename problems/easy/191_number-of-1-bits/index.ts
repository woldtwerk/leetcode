/*
Given a positive integer n, write a function that returns the number of in its binary representation (also known as the Hamming weight).
 */

export function hammingWeight(n: number): number {
  const b = n.toString(2)

  let sum = 0
  for (const number of b) {
    sum += +number
  }

  return sum
}
