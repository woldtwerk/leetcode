/*
Example 1:

Input: n = 6
Output: true
Explanation: 6 = 2 × 3
Example 2:

Input: n = 1
Output: true
Explanation: 1 has no prime factors.
Example 3:

Input: n = 14
Output: false
Explanation: 14 is not ugly since it includes the prime factor 7.
 

Constraints:

-231 <= n <= 231 - 1
*/

import { expect } from 'jsr:@std/expect'
import { isUgly } from './index.ts'

Deno.test('isUgly', () => {
  expect(isUgly(6)).toBe(true)
  expect(isUgly(1)).toBe(true)
  expect(isUgly(14)).toBe(false)
})
