/*
Example 1:


Input: head = [1,1,2]
Output: [1,2]
Example 2:


Input: head = [1,1,2,3,3]
Output: [1,2,3]
 

Constraints:

The number of nodes in the list is in the range [0, 300].
-100 <= Node.val <= 100
The list is guaranteed to be sorted in ascending order.
*/

import { expect } from 'jsr:@std/expect'
import { array2LinkedList } from '../../../utils.ts'
import { deleteDuplicates } from './index.ts'

Deno.test('deleteDuplicates', () => {
  expect(deleteDuplicates(array2LinkedList([1, 1, 2]))).toEqual(array2LinkedList([1, 2]))
  expect(deleteDuplicates(array2LinkedList([1, 1, 2, 3, 3]))).toEqual(array2LinkedList([1, 2, 3]))
  expect(deleteDuplicates(array2LinkedList([1, 1, 1]))).toEqual(array2LinkedList([1]))
})
