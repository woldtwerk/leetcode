/*
Example 1:

Input: num = 16
Output: true
Explanation: We return true because 4 * 4 = 16 and 4 is an integer.

Example 2:

Input: num = 14
Output: false
Explanation: We return false because 3.742 * 3.742 = 14 and 3.742 is not an integer.

 

Constraints:

    1 <= num <= 231 - 1

*/

import { expect } from 'jsr:@std/expect'
import { isPerfectSquare } from './index.ts'

Deno.test('isPerfectSquare', () => {
  expect(isPerfectSquare(16)).toBe(true)
  expect(isPerfectSquare(14)).toBe(false)
  expect(isPerfectSquare(9)).toBe(true)
})
