/*
Example 1:

Input: nums = [3,2,3]
Output: 3

Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2

 

Constraints:

    n == nums.length
    1 <= n <= 5 * 104
    -109 <= nums[i] <= 109

 
Follow-up: Could you solve the problem in linear time and in O(1) space?
*/

import { expect } from 'jsr:@std/expect'
import { majorityElement } from './index.ts'

Deno.test('isPalindrome', () => {
  expect(majorityElement([3,2,3])).toBe(3)
  expect(majorityElement([2,2,1,1,1,2,2])).toBe(2)
  expect(majorityElement([1])).toBe(1)
})
