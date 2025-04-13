/**
 * *pop()
 * -xóa phần tử cuối mảng
 * -thay đổi mảng gốc
 * -trả về phần tử bị xóa
 * */ 

const arrr = ['a', 'b', 'c', 'd', 'e'];
console.log(arrr.push(2))


/**
 * push()
 * thêm một phần tử vào cuối mảng
 * thay đổi mảng gốc
 * trả về chiều dài mảng mới
 * 
 * */ 
// console.log(arrr.shift())

/**
 * shift()
 * bớt 1 phần tử đầu mảng
 * thay đổi mảng gốc
 * trả về phần tử bị xóa
 * */

/**
 * unshift()
 * thay đổi mangr gốc
 * thêm 1 hoặc nhiều phần tử vào đầu mảng
 * trả về chiều dài mảng mới
 * */ 

// const arr = [1,2,3,4,5, 7 , 88];

// const onadd =[]
// const evenadd =[]
// for( let i = 0; i<arr.length; i++){
//     if(arr[i] % 2 == 0){
//         onadd.push(arr[i])
//     }
//     else{
//         evenadd.push(arr[i])
//     }
    

// }
// console.log(onadd)
// console.log(evenadd)

// const arr2 = ["hoang", "hieu", "nam", "thanh", "huy", "", null, undefined, "dong", NaN, 0 , 10, true];
// const newArr =[]
// for(let i =0; i<arr2.length;i++){
//     if(!!arr2[i]){
//         newArr.push(arr2[i])
//     }
   
// }
// console.log(newArr)

// const arr = ["apple", "banana", "kiwi", "orange"];
// let maxLength = arr[0];
// let minLength = arr[0];

// for(let i=0; i<arr.length;i++){
//     if(arr[i].length > maxLength.length){
//         maxLength = arr[i]  
//     }
//     if(arr[i].length < minLength.length){
//         minLength = arr[i]  
//     }

   
// }
// console.log(maxLength)
// console.log(minLength)



/**
 * i
/**
 * includes()
 * kiểm tra xem một phần tử có tồn tại trong mảng hay không
 * trả về true nếu tồn tại, ngược lại trả về false
 * Output: boolean(true, false)
 */
/**
 * indexOf()
 * tìm vị trí đầu tiên của một phần tử trong mảng
 * trả về -1 nếu không tìm thấy
 * Output: số nguyên (index)
 */

// const fruits = ["apple", "banana", "kiwi", "orange"];
// const index = fruits.indexOf("kiwi", 10);
// console.log(index); // Output: 2

/**
 * Giải thích:
 * - Hàm `indexOf` tìm vị trí đầu tiên của phần tử "kiwi" trong mảng `fruits`.
 * - Trong mảng `fruits`, "kiwi" nằm ở vị trí thứ 2 (theo chỉ số bắt đầu từ 0).
 * - Vì vậy, kết quả trả về là 2.
 */


// const arr = [1,2,3,4,5];
// let arr2 =[]

// for(let i=0; i<arr.length /2 ;i++){
//     arr2[i] = arr[arr.length -1 -i];
//     arr2[arr.length -1 - i] = arr[i]
// }
// console.log(arr2)

// const arr1 = [1,3,4];
// const arr2 = [6, 3, 5];
// const combinedArr = arr1.concat(arr2);
// console.log(combinedArr);


/**
 * concat()
 * nối hai hoặc nhiều mảng lại với nhau
 * không thay đổi mảng gốc
 * trả về mảng mới đã được nối
 */
const arr1 = [1, 3, 4];
const arr2 = [6, 3, 5];
const combinedArr = arr1.concat(arr2);
console.log(combinedArr); // Output: [1, 3, 4, 6, 3, 5]

// Kiểm tra xem mảng mới và mảng gốc có bằng nhau không
console.log(combinedArr === arr1); // Output: false
console.log(combinedArr === arr2); // Output: false
/**
 * join()
 * nối tất cả các phần tử của mảng thành một chuỗi
 * có thể sử dụng một chuỗi phân cách (separator) tùy chọn
 * trả về chuỗi đã nối
 */

const arr = ["apple", "banana", "kiwi", "orange"];
const joinedString = arr.join("-");
console.log(joinedString); // Output: "apple, banana, kiwi, orange"










