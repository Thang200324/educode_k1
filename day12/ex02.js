const arr1 = [1,2,3,4,5,4,6,8,2,5,11];
const randomArray = Array.from({ length: 10000 }, () => Math.floor(Math.random() * 1000));

// for (let i = 0; i < arr1.length; i++) {
//     for (let j = i + 1; j < arr1.length; j++) {
//         if (arr1[i] > arr1[j]) {
//             let temp = arr1[i];
//             arr1[i] = arr1[j];
//             arr1[j] = temp;
//         }
//     }
// }
// console.log(arr1);

function quickSort(arr) {
    if (arr.length <= 1) return arr;
    let pivot = arr[arr.length - 1];
    const left = [];
    const right = [];
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] <= pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
}
console.time("countTime")
console.log(quickSort(randomArray))
console.timeEnd("countTime")

