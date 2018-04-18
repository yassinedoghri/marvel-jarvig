export const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export const getArrayCounts = (arr) => {
    let counts = {};

    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        counts[num] = counts[num] ? counts[num] + 1 : 1;
    }
    return counts;
}
