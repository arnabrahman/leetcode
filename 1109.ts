function corpFlightBookings(bookings: number[][], n: number): number[] {
    let flights = []
    for (let i = 0; i < n; i++) {
        flights[i] = 0
    }
    bookings.forEach(booking => {
        for (let i = booking[0] - 1; i < booking[1]; i++) {
            flights[i] += booking[2]
        }

    });
    return flights
};

console.log(corpFlightBookings([[2, 2, 30], [2, 2, 45]], 2))