function slowestKey(releaseTimes: number[], keysPressed: string): string {
    let max = {
        'character': keysPressed[0],
        'duration': releaseTimes[0]
    }
    for (let i = 1; i < releaseTimes.length; i++) {
        const duration = releaseTimes[i] - releaseTimes[i - 1]
        if (duration > max.duration || (duration == max.duration && keysPressed[i] > max.character)) {
            max.character = keysPressed[i]
            max.duration = duration
        }
    }
    return max.character
};

console.log(slowestKey([12, 23, 36, 46, 62], "spuda"))