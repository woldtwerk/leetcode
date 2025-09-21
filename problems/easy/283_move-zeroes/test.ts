/*
Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

Example 2:

Input: nums = [0]
Output: [0]

 

Constraints:

    1 <= nums.length <= 104
    -231 <= nums[i] <= 231 - 1

 
Follow up: Could you minimize the total number of operations done?
 
*/

import { expect } from 'jsr:@std/expect'
import { moveZeroes } from './index.ts'

Deno.test('moveZeroes', () => {
  const nums1 = [0, 1, 0, 3, 12]
  moveZeroes(nums1)
  expect(nums1).toEqual([1, 3, 12, 0, 0])

  const nums2 = [0]
  moveZeroes(nums2)
  expect(nums2).toEqual([0])
})
