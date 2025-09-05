/*
Example 1:

Input: nums = [2,2,1]

Output: 1

Example 2:

Input: nums = [4,1,2,1,2]

Output: 4

Example 3:

Input: nums = [1]

Output: 1

 

Constraints:

    1 <= nums.length <= 3 * 104
    -3 * 104 <= nums[i] <= 3 * 104
    Each element in the array appears twice except for one element which appears only once.

*/

import { expect } from 'jsr:@std/expect'
import { singleNumber } from './index.ts'

Deno.test('isPalindrome', () => {
  expect(singleNumber([2,2,1])).toBe(1)
  expect(singleNumber([4,1,2,1,2])).toBe(4)
  expect(singleNumber([1])).toBe(1)
})
