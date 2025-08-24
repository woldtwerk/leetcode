/*
Example 1:

Input: nums = [1,3,5,6], target = 5
Output: 2

Example 2:

Input: nums = [1,3,5,6], target = 2
Output: 1

Example 3:

Input: nums = [1,3,5,6], target = 7
Output: 4

 

Constraints:

    1 <= nums.length <= 104
    -104 <= nums[i] <= 104
    nums contains distinct values sorted in ascending order.
    -104 <= target <= 104


*/

import { expect } from 'jsr:@std/expect'
import { searchInsert } from './index.ts'

Deno.test('searchInsert', () => {
  expect(searchInsert([1, 3, 5, 6], 5)).toBe(2)
  expect(searchInsert([1, 3, 5, 6], 2)).toBe(1)
  expect(searchInsert([1, 3, 5, 6], 7)).toBe(4)
})
