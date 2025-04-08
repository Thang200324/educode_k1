const arrNumber = [1, 2, 3, 4, 5, 5, null, undefined, 6];

function reverseArr(arr) {
    const reversedArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        if (typeof arr[i] === 'number') {
            reversedArr.push(arr[i]);
        }
    }
    return reversedArr;
  // Xử lý và in ra kết quả
}
const result = reverseArr(arrNumber);
console.log(result); // [6,5,4,3,2,1]