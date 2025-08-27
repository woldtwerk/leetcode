/*
Example 1:

Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps

Example 2:

Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step

 

Constraints:

    1 <= n <= 45

*/

import { expect } from 'jsr:@std/expect'
import { climbStairs } from './index.ts'

Deno.test('climbStairs', () => {
  expect(climbStairs(2)).toEqual(2)
  expect(climbStairs(3)).toEqual(3)
})
