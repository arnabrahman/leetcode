class UndergroundSystem {
    private customers;
    private avgTime;

    constructor() {
        this.customers = new Map()
        this.avgTime = new Map()
    }

    checkIn(id: number, stationName: string, t: number): void {
        this.customers.set(id, { startStation: stationName, time: t })
    }

    checkOut(id: number, stationName: string, t: number): void {
        const customer = this.customers.get(id)
        const startStation = customer.startStation
        const startTime = customer.time
        if (this.avgTime.has(this.getDistanceKey(startStation, stationName))) {
            const avgTime = this.avgTime.get(this.getDistanceKey(startStation, stationName))
            avgTime.totalTime += (t - startTime)
            avgTime.count += 1
        } else {
            this.avgTime.set(this.getDistanceKey(startStation, stationName), {
                totalTime: t - startTime,
                count: 1
            })
        }
    }

    getAverageTime(startStation: string, endStation: string): number {
        let avgTimeData = this.avgTime.get(this.getDistanceKey(startStation, endStation))
        return avgTimeData.totalTime / avgTimeData.count
    }

    getDistanceKey(from: string, to: string) {
        return from + "-" + to
    }
}


let undergroundSystem = new UndergroundSystem();
undergroundSystem.checkIn(45, "a", 3);
undergroundSystem.checkIn(32, "aa", 8);
undergroundSystem.checkIn(27, "a", 10);
undergroundSystem.checkOut(45, "ab", 15);  // Customer 45 "Leyton" -> "Waterloo" in 15-3 = 12
undergroundSystem.checkOut(27, "ab", 20);  // Customer 27 "Leyton" -> "Waterloo" in 20-10 = 10
undergroundSystem.checkOut(32, "b", 22); // Customer 32 "Paradise" -> "Cambridge" in 22-8 = 14
undergroundSystem.getAverageTime("aa", "b"); // return 14.00000. One trip "Paradise" -> "Cambridge", (14) / 1 = 14
undergroundSystem.getAverageTime("a", "ab");    // return 11.00000. Two trips "Leyton" -> "Waterloo", (10 + 12) / 2 = 11
undergroundSystem.checkIn(10, "a", 24);
undergroundSystem.getAverageTime("a", "ab");    // return 11.00000
undergroundSystem.checkOut(10, "ab", 38);  // Customer 10 "Leyton" -> "Waterloo" in 38-24 = 14
undergroundSystem.getAverageTime("a", "ab");    // return 12.00000. Three trips "Leyton" -> "Waterloo", (10 + 12 + 14) / 3 = 12