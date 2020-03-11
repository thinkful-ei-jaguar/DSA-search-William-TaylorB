function indexOf(array, value) {
    let tick = 0;
    for (let i = 0; i < array.length; i++) {
        tick++
        if (array[i] == value) {
            return {nope: null, index: i, tick: tick};
        }
    }
    return {nope: -1, index: null, tick: tick};
};

function binarySearch(array, value, start, end, tick=0) {
    var start = start === undefined ? 0 : start;
    var end = end === undefined ? array.length : end;

    if (start > end) {
        return {nope: true, index: null, tick: tick}
    }

    const index = Math.floor((start + end) / 2);
    const item = array[index];

    console.log(start, end);
    if (item == value) {
        return {nope: false, index: index, tick: tick}
    }
    else if (item < value) {
        return binarySearch(array, value, index + 1, end, tick+1);
    }
    else if (item > value) {
        return binarySearch(array, value, start, index - 1, tick+1);
    }
};

module.exports = { indexOf, binarySearch }