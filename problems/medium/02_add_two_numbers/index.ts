/*
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.
*/

import { ListNode } from '../../../utils.ts'

function listToNumber(list: ListNode | null) {
  if (!list)
    return 0

  let next = list.next
  const number = [list.val]

  while(next) {
    number.push(next.val)
    next = next.next
  }

  return +number.toReversed().join('')
}

export function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null,
): ListNode | null {

  const num1 = listToNumber(l1)
  const num2 = listToNumber(l2)

  const sum = num1 + num2
  const length = `${sum}`.length - 1 || 0
  const result = new ListNode()
  let pointer = result

  ;`${sum}`.split('').toReversed().forEach((val, idx) => {
    pointer.val = +val ? +val : 0
    if (idx < length) {
      pointer.next = new ListNode()
      pointer = pointer.next
    }
  })
  return result
}
