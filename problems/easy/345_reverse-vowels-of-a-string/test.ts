/*
Example 1:

Input: s = "IceCreAm"

Output: "AceCreIm"

Explanation:

The vowels in s are ['I', 'e', 'e', 'A']. On reversing the vowels, s becomes "AceCreIm".

Example 2:

Input: s = "leetcode"

Output: "leotcede"

 

Constraints:

    1 <= s.length <= 3 * 105
    s consist of printable ASCII characters.
*/

import { expect } from 'jsr:@std/expect'
import { reverseVowels } from './index.ts'

Deno.test('reverseString', () => {
  expect(reverseVowels("IceCreAm")).toEqual("AceCreIm")
  expect(reverseVowels("leetcode")).toEqual("leotcede")
})
