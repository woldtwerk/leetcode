/*
Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal
consisting of non-space characters only.
*/

export function lengthOfLastWord(s: string): number {
  const match = s.match(/\w+/g)
  return match?.length ? match.at(-1)?.length ?? 0 : 0
}
