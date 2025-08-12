/*
Example 1:

Input: s = "III"
Output: 3
Explanation: III = 3.

Example 2:

Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.

Example 3:

Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
*/

import { expect } from 'jsr:@std/expect'
import { romanToInt } from './index.ts'

Deno.test('romanToInt', () => {
  expect(romanToInt('III')).toBe(3)
  expect(romanToInt('LVIII')).toBe(58)
  expect(romanToInt('MCMXCIV')).toBe(1994)
})
