/**
Given a pattern and a string s, find if s follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s. Specifically:

    Each letter in pattern maps to exactly one unique word in s.
    Each unique word in s maps to exactly one letter in pattern.
    No two letters map to the same word, and no two words map to the same letter.

 */
export function wordPattern(pattern: string, s: string): boolean {
    const map = new Map()
    const p = pattern.split("")
    const c = s.split(" ")

    if (p.length !== c.length)
      return false

    const pSet = [...new Set(p)];
    const cSet = [...new Set(c)];

    if (pSet.length !== cSet.length)
      return false

    for (let i = 0; i < c.length; ++i) {
        if (map.has(p[i]) && map.get(p[i]) !== c[i])
          return false;
        map.set(p[i], c[i])
    }

    return true
}