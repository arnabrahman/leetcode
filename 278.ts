/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

var solution = function (isBadVersion: any) {

    return function (n: number): number {
        let i = 1
        let j = n
        let lastBadFound = 0
        while (i <= j) {
            let mid = Math.floor((i + j) / 2)
            if (isBadVersion(mid)) {
                j = mid - 1
                lastBadFound = mid
            } else {
                i = mid + 1
            }
        }
        return lastBadFound
    };
};