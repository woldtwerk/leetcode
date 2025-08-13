/*
Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"

Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

*/

import { expect } from 'jsr:@std/expect'
import { longestCommonPrefix } from './index.ts'

Deno.test('longestCommonPrefix', () => {
  expect(longestCommonPrefix(["flower","flow","flight"])).toBe("fl")
  expect(longestCommonPrefix(["dog","racecar","car"])).toBe("")
})
