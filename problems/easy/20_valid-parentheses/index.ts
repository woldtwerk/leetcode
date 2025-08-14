/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

    Open brackets must be closed by the same type of brackets.
    Open brackets must be closed in the correct order.
    Every close bracket has a corresponding open bracket of the same type.
*/

export function isValid(s: string): boolean {
  if (s.length % 2 !== 0) return false

  const stack: string[] = []
  const openingBrackets = ['(', '[', '{']
  const closingBrackets = [')', ']', '}']

  for (const char of s) {
    if (openingBrackets.includes(char)) {
      stack.push(char)
      continue
    }
    const idx = closingBrackets.indexOf(char)
    if (idx >= 0 && stack.at(-1) === openingBrackets[idx]) {
      stack.pop()
      continue
    }
    return false
  }
  return stack.length === 0
}
