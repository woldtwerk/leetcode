/**
Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.
 */
export function reverseVowels(s: string): string {
  const vowels = (s.match(/[aeiouAEIOU]/g) || []).reverse()
  let result = ''

  for (let i = 0; i < s.length; i++) {
    if (/[aeiouAEIOU]/.test(s[i])) {
      result += vowels.shift()
    } else {
      result += s[i]
    }
  }

  return result
}