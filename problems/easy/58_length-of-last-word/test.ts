/*
Example 1:

Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.

Example 2:

Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.

Example 3:

Input: s = "luffy is still joyboy"
Output: 6
Explanation: The last word is "joyboy" with length 6.


*/

import { expect } from 'jsr:@std/expect'
import { lengthOfLastWord } from './index.ts'

Deno.test('lengthOfLastWord', () => {
  expect(lengthOfLastWord("Hello World")).toBe(5)
  expect(lengthOfLastWord("   fly me   to   the moon  ")).toBe(4)
  expect(lengthOfLastWord("luffy is still joyboy")).toBe(6)
})
