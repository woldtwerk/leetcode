/*
Example 1:

Input: num = 38
Output: 2
Explanation: The process is
38 --> 3 + 8 --> 11
11 --> 1 + 1 --> 2 
Since 2 has only one digit, return it.

Example 2:

Input: num = 0
Output: 0

 

Constraints:

    0 <= num <= 231 - 1

*/

import { expect } from 'jsr:@std/expect'
import { addDigits } from './index.ts'

Deno.test('addDigits', () => {
  expect(addDigits(38)).toBe(2)
  expect(addDigits(0)).toBe(0)
})
