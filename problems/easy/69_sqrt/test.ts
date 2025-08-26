/*
Example 1:

Input: x = 4
Output: 2
Explanation: The square root of 4 is 2, so we return 2.

Example 2:

Input: x = 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.

 

Constraints:

    0 <= x <= 231 - 1
*/

import { expect } from 'jsr:@std/expect'
import { mySqrt } from './index.ts'

Deno.test('mySqrt', () => {
  expect(mySqrt(4)).toEqual(2)
  expect(mySqrt(8)).toEqual(2)
})
