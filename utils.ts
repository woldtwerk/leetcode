export class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

export function array2LinkedList(values: number[]): ListNode | null {
  if (!values || values.length === 0) return null;

  const head = new ListNode(values[0]);
  let current = head;

  for (let i = 1; i < values.length; i++) {
    current.next = new ListNode(values[i]);
    current = current.next;
  }

  return head;
}

export class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
  }
}

export function array2Tree(values: (number | null)[]): TreeNode | null {
  if (!values || values.length === 0) return null;

  const root = new TreeNode(values[0] as number);
  const queue: TreeNode[] = [root];
  let i = 1;

  while (i < values.length && queue.length) {
    const current = queue.shift()!;
    if (values[i] !== null && i < values.length) {
      current.left = new TreeNode(values[i] as number);
      queue.push(current.left);
    }
    i++;
    if (i < values.length && values[i] !== null) {
      current.right = new TreeNode(values[i] as number);
      queue.push(current.right);
    }
    i++;
  }

  return root;
} 