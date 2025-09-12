/*
Example 1:

Input: n = 11

Output: 3

Explanation:

The input binary string 1011 has a total of three set bits.

Example 2:

Input: n = 128

Output: 1

Explanation:

The input binary string 10000000 has a total of one set bit.

Example 3:

Input: n = 2147483645

Output: 30

Explanation:

The input binary string 1111111111111111111111111111101 has a total of thirty set bits.

 

Constraints:

    1 <= n <= 231 - 1

 
Follow up: If this function is called many times, how would you optimize it?
*/

import { expect } from 'jsr:@std/expect'
import { hammingWeight } from './index.ts'

Deno.test('hammingWeight', () => {
  expect(hammingWeight(11)).toBe(3)
  expect(hammingWeight(128)).toBe(1)
  expect(hammingWeight(2147483645)).toBe(30)
})
