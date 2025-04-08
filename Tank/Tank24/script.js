const number = [4, 2, 7, 6, 5, 8, 2, 1];

function sortArrNumber(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
  // Xử lý và in ra kết quả
}

const result = sortArrNumber(number);
console.log(result); // [1,2,2,4,5,6,7,8]