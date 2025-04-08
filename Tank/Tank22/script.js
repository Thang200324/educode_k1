const arrayNumber = [1, 2, 3, 4, 3, 2, 1];
const testArrays = [ [1, 2, 3, 3, 2, 1] ,[1, 2, 3, 2, 1]] 
function checkSymmetricalArr(arr) {
    if (!Array.isArray(arr)) {
        return "dữ liệu không hợp lệ";
    }
    if (arr.length === 1) {
        return "mảng có 1 phần tử không kiểm tra được";
    }
    for (let i = 0; i < (arr.length - 1) / 2; i++) {
        if (arr[i] !== arr[arr.length - 1 - i]) {
            return false;
        }
    }
    return true;

  // Xử lý logic
}
const result = checkSymmetricalArr(arrayNumber);
const test = checkSymmetricalArr(testArrays);


console.log(result); //true
console.log(test); 
