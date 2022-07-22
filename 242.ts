function isAnagram(s: string, t: string): boolean {
  let hash: Map<string, number> = new Map()
  for (const ch of s) {
    hash.set(ch, hash.has(ch) ? hash.get(ch) + 1 : 1)
  }
  for (const ch of t) {
    if (!hash.has(ch)) return false
    hash.get(ch) == 1 ? hash.delete(ch) : hash.set(ch, hash.get(ch) - 1)
  }
  return hash.size == 0
}

console.log(isAnagram('anagram', 'nagaram'));
console.log(isAnagram('rat', 'car'));
