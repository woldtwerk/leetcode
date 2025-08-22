/*
Example 1:

Input: digits = [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4].

Example 2:

Input: digits = [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.
Incrementing by one gives 4321 + 1 = 4322.
Thus, the result should be [4,3,2,2].

Example 3:

Input: digits = [9]
Output: [1,0]
Explanation: The array represents the integer 9.
Incrementing by one gives 9 + 1 = 10.
Thus, the result should be [1,0].

 

Constraints:

    1 <= digits.length <= 100
    0 <= digits[i] <= 9
    digits does not contain any leading 0's.
*/

import { expect } from 'jsr:@std/expect'
import { plusOne } from './index.ts'

Deno.test('plusOne', () => {
  expect(plusOne([1, 2, 3])).toEqual([1, 2, 4])
  expect(plusOne([4, 3, 2, 1])).toEqual([4, 3, 2, 2])
  expect(plusOne([9])).toEqual([1, 0])
})
