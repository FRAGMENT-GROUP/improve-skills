function getArray(n) {
    const arr = [1, 1];
    while (arr.length < n) {
        const i = arr.length;
        const a = arr[i - arr[i - 1]];
        const b = arr[i - arr[i - 2]];
        arr.push(a + b);
    }
    return arr;
}

function lengthSupUK(n , k) {
    const arr = getArray(n);
    return arr.filter(v => v >= k).length;
}

function comp(n) {
    const arr = getArray(n);
    return arr.filter((v, i, a) => v < a[i - 1]).length;
}

module.exports = lengthSupUK
module.exports = comp