/*
Reverse bits of a given 32 bits signed integer.
 */

export function reverseBits(n: number): number {
  const thirtyTwoBit = new Array(32).fill('0')
  const number = n.toString(2).split('') 
  return parseInt(thirtyTwoBit.toSpliced(32 - number.length, number.length, ...number).reverse().join(''), 2)
}
