/*
Example 1:

Input: n = 16
Output: true

Example 2:

Input: n = 5
Output: false

Example 3:

Input: n = 1
Output: true

 

Constraints:

    -231 <= n <= 231 - 1

 
Follow up: Could you solve it without loops/recursion?

*/

import { expect } from 'jsr:@std/expect'
import { isPowerOfFour } from './index.ts'

Deno.test('isPowerOfFour', () => {
  expect(isPowerOfFour(16)).toEqual(true)
  expect(isPowerOfFour(5)).toEqual(false)
  expect(isPowerOfFour(1)).toEqual(true)
})
