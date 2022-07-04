function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
    const m = image.length - 1
    const n = image[0].length - 1
    const startingPixel = image[sr][sc]
    fill(sr, sc)
    function fill(sr: number, sc: number) {
        if (image[sr][sc] == color) return
        image[sr][sc] = color
        if (sr - 1 >= 0 && image[sr - 1][sc] == startingPixel) fill(sr - 1, sc)
        if (sr + 1 <= m && image[sr + 1][sc] == startingPixel) fill(sr + 1, sc)
        if (sc + 1 <= n && image[sr][sc + 1] == startingPixel) fill(sr, sc + 1)
        if (sc - 1 >= 0 && image[sr][sc - 1] == startingPixel) fill(sr, sc - 1)
    }
    return image
};

console.log(floodFill([[0, 0, 0], [0, 0, 0]], 0, 0, 0));
