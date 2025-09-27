/*
Example 1:

Input: n = 27
Output: true
Explanation: 27 = 33

Example 2:

Input: n = 0
Output: false
Explanation: There is no x where 3x = 0.

Example 3:

Input: n = -1
Output: false
Explanation: There is no x where 3x = (-1).

 

Constraints:

    -231 <= n <= 231 - 1

 
*/

import { expect } from 'jsr:@std/expect'
import { isPowerOfThree } from './index.ts'

Deno.test('isPowerOfThree', () => {
  expect(isPowerOfThree(27)).toBe(true)
  expect(isPowerOfThree(0)).toBe(false)
  expect(isPowerOfThree(-1)).toBe(false)
})
