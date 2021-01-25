// Min to Front
// Given an array of comparable values, move the lowest element to array’s front, shifting backward any elements previously ahead of it. Do not otherwise change the array’s order. Given[4, 2, 1, 3, 5], change it to[1, 4, 2, 3, 5] and return it. As always, do this without using built-in functions.
function minToFront(arr) {
    let min = arr[0];
    let idx = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
            idx = i;
        }
    }
    for (let x = idx; x > 0; x--) {
        let temp = arr[x];
        arr[x] = arr[x - 1];
        arr[x - 1] = temp
    }
    return arr;
}
console.log(minToFront([4, 2, 1, 3, 5]))