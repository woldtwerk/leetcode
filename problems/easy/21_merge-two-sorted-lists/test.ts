/*
Example 1:

Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]

Example 2:

Input: list1 = [], list2 = []
Output: []

Example 3:

Input: list1 = [], list2 = [0]
Output: [0]
*/

import { expect } from 'jsr:@std/expect'
import { mergeTwoLists, ListNode } from './index.ts'

Deno.test('mergeTwoLists', () => {
  const list1 = new ListNode(1, new ListNode(2, new ListNode(4)))
  const list2 = new ListNode(1, new ListNode(3, new ListNode(4)))
  const merged = mergeTwoLists(list1, list2)
  expect(merged).toEqual(new ListNode(1, new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(4)))))))

  const merged2 = mergeTwoLists(null, null)
  expect(merged2).toBeNull()

  const merged3 = mergeTwoLists(null, new ListNode(0))
  expect(merged3).toEqual(new ListNode(0))
})
