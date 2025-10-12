/*
Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]

Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Explanation: [4,9] is also accepted.

 

Constraints:

    1 <= nums1.length, nums2.length <= 1000
    0 <= nums1[i], nums2[i] <= 1000

*/

import { expect } from 'jsr:@std/expect'
import { intersection } from './index.ts'

Deno.test('reverseString', () => {
  expect(intersection([1,2,2,1], [2,2])).toEqual([2])
  expect(intersection([4,9,5], [9,4,9,8,4])).toEqual([4,9])
})
