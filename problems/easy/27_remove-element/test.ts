/*
Example 1:

Input: nums = [3,2,2,3], val = 3
Output: 2, nums = [2,2,_,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 2.
It does not matter what you leave beyond the returned k (hence they are underscores).

Example 2:

Input: nums = [0,1,2,2,3,0,4,2], val = 2
Output: 5, nums = [0,1,4,0,3,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.
Note that the five elements can be returned in any order.
It does not matter what you leave beyond the returned k (hence they are underscores).
*/

import { expect } from 'jsr:@std/expect'
import { removeElement } from './index.ts'

Deno.test('removeElement', () => {
  const example1 = [3, 2, 2, 3]
  expect(removeElement(example1, 3)).toBe(2)
  expect(example1.includes(3)).toBe(false)
  
  const example2 = [0, 1, 2, 2, 3, 0, 4, 2]
  expect(removeElement(example2, 2)).toBe(5)
  expect(example2.includes(2)).toBe(false)
})
