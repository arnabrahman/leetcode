const memory = new Map()

/**
 * Encodes a URL to a shortened URL.
 */
function encode(longUrl: string): string {
    let n = memory.size + 1
    const key = n
    var base62 = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var result = '';
    while (n > 0) {
        result = base62[n % 62] + result;
        n = Math.floor(n / 62)
    }
    memory.set(key, {
        id: key,
        longUrl: longUrl,
        shortUrl: result
    })
    return result;
};

/**
 * Decodes a shortened URL to its original URL.
 */
function decode(shortUrl: string): string {
    var base62 = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var result = 0;
    for (var i = 0; i < shortUrl.length; i++) {
        var p = base62.indexOf(shortUrl[i]);
        if (p < 0) console.log("aff");
        result += p * Math.pow(62, (shortUrl.length - 1) - i);
    };
    return memory.get(result)?.longUrl
};
console.log(encode("www.sheba.xyz"));
console.log(decode("b"));


/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */