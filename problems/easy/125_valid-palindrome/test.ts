/*
Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.

Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.

Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.

 

Constraints:

    1 <= s.length <= 2 * 105
    s consists only of printable ASCII characters.

*/

import { expect } from 'jsr:@std/expect'
import { isPalindrome } from './index.ts'

Deno.test('isPalindrome', () => {
  expect(isPalindrome("A man, a plan, a canal: Panama")).toBe(true)
  expect(isPalindrome("race a car")).toBe(false)
  expect(isPalindrome(" ")).toBe(true)
  expect(isPalindrome("ab_a")).toBe(true)
})
