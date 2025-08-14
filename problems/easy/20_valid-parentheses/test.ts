/*
Example 1:

Input: s = "()"

Output: true

Example 2:

Input: s = "()[]{}"

Output: true

Example 3:

Input: s = "(]"

Output: false

Example 4:

Input: s = "([])"

Output: true

Example 5:

Input: s = "([)]"

Output: false
*/

import { expect } from 'jsr:@std/expect'
import { isValid } from './index.ts'

Deno.test('isValid', () => {
  expect(isValid("()")).toBe(true)
  expect(isValid("()[]{}")).toBe(true)
  expect(isValid("(]")).toBe(false)
  expect(isValid("([])")).toBe(true)
  expect(isValid("([)]")).toBe(false)
})
