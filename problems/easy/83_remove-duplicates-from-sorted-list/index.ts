/*
Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.
*/

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

import { ListNode } from '../../../utils.ts'

export function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (head === null) return null
  if (head.next === null) return head

  const dups = new Set([head.val])
  let last: ListNode = head
  let current: ListNode | null = head.next

  while(current !== null) {
    if (dups.has(current.val)) {
      last.next = current.next
      current = current.next
    } else {
      dups.add(current.val)
      last = current
      current = current.next
    }
  }
  
  return head
}
