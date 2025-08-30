/*
Given the root of a binary tree, return the inorder traversal of its nodes' values.
 */

import { TreeNode } from '../../../utils.ts'

export function inorderTraversal(root: TreeNode | null): number[] {
  const result: number[] = []
  
  function traverse(node: TreeNode | null): void {
    if (node === null) return
    
    traverse(node.left)
    
    result.push(node.val)
    
    traverse(node.right)
  }
  
  traverse(root)
  return result
}