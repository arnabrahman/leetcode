function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;
  let store = new Map();
  for (const character of s) {
    let value: number = store.has(character) ? store.get(character) + 1 : 1;
    store.set(character, value);
  }
  for (const character of t) {
    if (!store.has(character)) return false;
    let value: number = store.get(character);
    value == 1 ? store.delete(character) : store.set(character, value - 1);
  }
  return store.size == 0;
}

console.log(isAnagram("tab", "bat"));
