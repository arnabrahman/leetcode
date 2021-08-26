function groupThePeople(groupSizes: number[]): number[][] {
    let groups: number[][] = []
    let availableGroups = {}
    for (let i = 0; i < groupSizes.length; i++) {
        if (availableGroups[groupSizes[i]]) {
            let people: number[] = availableGroups[groupSizes[i]]
            people.push(i)
            availableGroups[groupSizes[i]] = people
            if (availableGroups[groupSizes[i]].length < groupSizes[i]) continue
            groups.push(availableGroups[groupSizes[i]])
            delete availableGroups[groupSizes[i]]

        } else {
            availableGroups[groupSizes[i]] = [i]
            if (availableGroups[groupSizes[i]].length < groupSizes[i]) continue
            groups.push(availableGroups[groupSizes[i]])
            delete availableGroups[groupSizes[i]]
        }
    }
    return groups
};


console.log(groupThePeople([1]))