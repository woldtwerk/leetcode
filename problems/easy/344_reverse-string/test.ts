/*
Example 1:

Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]

Example 2:

Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]

 

Constraints:

    1 <= s.length <= 105
    s[i] is a printable ascii character.


*/

import { expect } from 'jsr:@std/expect'
import { reverseString } from './index.ts'

Deno.test('reverseString', () => {
  const example1 = ['h','e','l','l','o']
  reverseString(example1)
  expect(example1).toEqual(['o','l','l','e','h'])

  const example2 = ['H','a','n','n','a','h']
  reverseString(example2)
  expect(example2).toEqual(['h','a','n','n','a','H'])
})
