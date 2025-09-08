/*
Example 1:

Input: n = 1
Output: true
Explanation: 20 = 1

Example 2:

Input: n = 16
Output: true
Explanation: 24 = 16

Example 3:

Input: n = 3
Output: false

 

Constraints:

    -231 <= n <= 231 - 1

 
Follow up: Could you solve it without loops/recursion?
*/

import { expect } from 'jsr:@std/expect'
import { isPowerOfTwo } from './index.ts'

Deno.test('isPowerOfTwo', () => {
  expect(isPowerOfTwo(1)).toBe(true)
  expect(isPowerOfTwo(16)).toBe(true)
  expect(isPowerOfTwo(3)).toBe(false)
})
