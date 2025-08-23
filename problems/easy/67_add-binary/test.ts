/*
Example 1:

Input: a = "11", b = "1"
Output: "100"

Example 2:

Input: a = "1010", b = "1011"
Output: "10101"

Constraints:

    1 <= a.length, b.length <= 104
    a and b consist only of '0' or '1' characters.
    Each string does not contain leading zeros except for the zero itself.
*/

import { expect } from 'jsr:@std/expect'
import { addBinary } from './index.ts'

Deno.test('addBinary', () => {
  expect(addBinary("11", "1")).toEqual("100")
  expect(addBinary("1010", "1011")).toEqual("10101")
  expect(addBinary("10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101", "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011")).toEqual("110111101100010011000101110110100000011101000101011001000011011000001100011110011010010011000000000")
})
