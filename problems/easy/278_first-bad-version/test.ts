/*
Example 1:

Input: n = 5, bad = 4
Output: 4
Explanation:
call isBadVersion(3) -> false
call isBadVersion(5) -> true
call isBadVersion(4) -> true
Then 4 is the first bad version.

Example 2:

Input: n = 1, bad = 1
Output: 1

 

Constraints:

    1 <= bad <= n <= 231 - 1

 
*/

import { expect } from 'jsr:@std/expect'
import { solution } from './index.ts'

Deno.test('firstBadVersion', () => {
  const isBadVersion = (version: number) => version >= 4
  const result = solution(isBadVersion)
  expect(result(5)).toBe(4)
  expect(result(1)).toBe(1)
})
