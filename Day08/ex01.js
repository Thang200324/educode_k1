let x = 10;
console.log(typeof x === "number")

let string1 = "hello";
console.log(typeof string1);

console.log(typeof null);// oject
console.log(typeof undefined);// undefined

console.log(typeof NaN);// number

let string2 = new String('123')
console.log(string2)

console.log(typeof string2)
console.log  ( typeof string2.valueOf()); //strinng

/**
 * String, Number, Boolean
 * 
 */
const myNumber = new Number(23);
const myNumber2 = 23;

console.log({myNumber});
console.log({myNumber2});

/**
 * Nếu như không thực sự cần khai báo giá trị với hàm tạo thì không nên dùng vì hiệu suất truy cập giá trị kém hơn, tổn bộ nhớ lữu trữ hơn.
 */