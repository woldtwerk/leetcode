/*
Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
*/

import { expect } from 'jsr:@std/expect'
import { twoSum } from './index.ts'

Deno.test('twoSum', () => {
  expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1])
  expect(twoSum([3, 2, 4], 6)).toEqual([1, 2])
  expect(twoSum([3, 3], 6)).toEqual([0, 1])
})
