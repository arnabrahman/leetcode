function getHint(secret: string, guess: string): string {
    let bulls = 0
    let cows = 0
    let memory: Map<string, number> = new Map()
    let memory1: Map<string, number> = new Map()
    for (let i = 0; i < secret.length; i++) {
        memory.set(secret[i], memory.get(secret[i]) ? memory.get(secret[i]) + 1 : 1)
        memory1.set(guess[i], memory1.get(guess[i]) ? memory1.get(guess[i]) + 1 : 1)
    }
    for (let i = 0; i < secret.length; i++) {
        if (secret[i] == guess[i]) {
            bulls++
            memory.get(secret[i]) == 1 ? memory.delete(secret[i]) : memory.set(secret[i], (memory.get(secret[i]) - 1))
        }
    }
    for (let i = 0; i < secret.length; i++) {
        if (secret[i] != guess[i] && memory.has(guess[i])) {
            cows++
            memory.get(guess[i]) == 1 ? memory.delete(guess[i]) : memory.set(guess[i], (memory.get(guess[i]) - 1))
        }
    }
    return bulls + 'A' + cows + 'B'
};

console.log(getHint('0123', '1111'));
