/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".
*/

export function longestCommonPrefix(strs: string[]): string {
  const arrayCount = strs.length
  if (arrayCount === 0) return ''

  strs.sort()

  const first = strs[0]
  const last = strs[arrayCount - 1]
  const minLength = Math.min(first.length, last.length)
  let prefix = ''

  for (let i = 0; i < minLength; i++) {
    if (first[i] !== last[i]) break
    prefix += first[i]
  }

  return prefix
}
