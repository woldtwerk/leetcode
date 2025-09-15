/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 */

export function isAnagram(s: string, t: string): boolean {
  return s.split('').sort().join('') === t.split('').sort().join('') 
}
