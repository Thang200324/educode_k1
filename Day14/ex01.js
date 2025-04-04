// // const name = "fullname"
// // let age = "20"
// // let adress = "hnan"

// // const obj1 = {
// //     [name] : "chuThang",
// //     age, 
// //     adress,// shorthand property
// // }
// // console.log(obj1)


// /**
//  * Object, Array
//  * Spread
//  * destruring
//  * rest
//  */

// /**
//  * * Spread rai cac gia tri co san vao mot object array moi neu nhu trung key thi se duoc ghi de
//  * co the dung o dau cuoi hoac bat ki 
//  */
// const obj1 = { name: "Thang", age: 20 };

// const obj2 = { email: "thang@gmail.com" };

// const arr = [1, , , 2, 3]

// const full = { ...obj1, ...obj2, adress: "hN", ...arr, 1: "gg" }

// console.log(full)

// const obj3 = { fullname: "Thang CC", email: "thang@gmail.com", idol: "thang", password: "123456", bios: "ocde" }

// const { email, password: userPassword, ...other } = obj3; // destructuring with renaming
// console.log(email)
// console.log(userPassword)
// console.log(other)// other lấy được do áp dụng rest để gom phần còn lại thành object/array

// const copy = {...obj3}// shalow copy

// console.log("helo", 1,2,3 , "JS")

// // function sum(...rest){
// //     console.log(rest);
// //     let total = 0;
// //     for(let i=0; i<total.length-1 ; i++){
// //         total += rest[i]
// //     }
// //     return total
// // }
// // console.log(sum(1,2,3,4))


// const people =[
//     {name: "thang", scale: 60},
//     {name: "hung", scale: 70},
//     {name: "anh", scale: 80},
//     {name: "tuan", scale: 50},
//     {name: "thanh", scale: 1000},
// ]
// function elevatorScale(...people){
//     let totalScale = 0;
//     console.log(people)
//     for(let i=0; i<people.length; i++){
//         totalScale += people[i].scale
        
//         console.log(totalScale)
//         return totalScale <= 750
//     }
// }
// console.log(elevatorScale(...people))

/**
 * !Copy
 * 1 Array
 * 2 Object
 */
// const arr = [1,2,3,4,5,6,7,8,9,10]

// const arr2 = [...arr]

// const 

/**
 * flat
 * * default value =1: lam phang 1 cap
 * * value : do sau cua mang can lam phang (neu can lam phang toan bo mang chua xác định cấp thì dùng infinity)
 * ? lam phang o cap nao thi mat phan tu o cap do
 * neu deepth < 0 thi duoc gan = 0
 */

// const arr1 = [1,,,,2,3,[4,5,6,[7,8,[9]]]]

// const flatArr = arr1.flat(1)
// const flatArr2 = arr1.flat(-3)
// const flatArr3 = arr1.flat(Infinity)


// console.log(arr1)
// console.log(flatArr)

// console.log(flatArr2)

// console.log(flatArr3)

const myArr = [
    [1,2],
    [8,-1],
    [7,9],
    [0,6,[3,4,100]]
]
const maxValue = Math.max(...myArr.flat(Infinity))
console.log(maxValue)


// Hàm để làm phẳng một mảng đến một độ sâu được chỉ định

function flat(arr, depth = 1) {
    const newArr = []; // Khởi tạo một mảng mới để lưu các phần tử đã làm phẳng
    for (let i = 0; i < myArr.length; i++) { 
        // Lặp qua từng phần tử của mảng
        // Kiểm tra nếu phần tử hiện tại không phải là mảng và độ sâu lớn hơn 0
        if (!Array.isArray(newArr) && depth > 0) {
            // Đệ quy làm phẳng mảng và thêm các phần tử vào newArr
            newArr.push(...flat(arr[i], depth - 1));
        } else {
            // Nếu phần tử không phải là mảng hoặc độ sâu bằng 0, thêm trực tiếp vào newArr
            arr[i] && newArr.push(arr[i]);
        }
    }
    return newArr; // Trả về mảng đã làm phẳng
}
console.log(flat([1, [2, 3, , , [4, [, , , , 6, 7]]]], Infinity))
// function generateNumbers(n, current = 1, result = []) {
//     if (current > n) return result;
//     result.push(current);
//     return generateNumbers(n, current + 1, result);
// }
// const numbers = generateNumbers(10);
// console.log(numbers);

function printNumber(n) {
    let i = n-1 ;
    if (n > 0) {
        printNumber(n - 1);
        i++;
        console.log(i);
    }
}
printNumber(5);


