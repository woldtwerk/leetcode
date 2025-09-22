/*
Example 1:

Input: pattern = "abba", s = "dog cat cat dog"

Output: true

Explanation:

The bijection can be established as:

    'a' maps to "dog".
    'b' maps to "cat".

Example 2:

Input: pattern = "abba", s = "dog cat cat fish"

Output: false

Example 3:

Input: pattern = "aaaa", s = "dog cat cat dog"

Output: false

 

Constraints:

    1 <= pattern.length <= 300
    pattern contains only lower-case English letters.
    1 <= s.length <= 3000
    s contains only lowercase English letters and spaces ' '.
    s does not contain any leading or trailing spaces.
    All the words in s are separated by a single space.

 
*/

import { expect } from 'jsr:@std/expect'
import { wordPattern } from './index.ts'

Deno.test('wordPattern', () => {
  expect(wordPattern("abba", "dog cat cat dog")).toBe(true)
  expect(wordPattern("abba", "dog cat cat fish")).toBe(false)
  expect(wordPattern("aaaa", "dog cat cat dog")).toBe(false)
})
