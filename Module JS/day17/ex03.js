// console.log({String})
// console.log({Array})
// console.log({Object})
// // console.log({Number})
// console.log(Number.MIN_VALUE)
// console.log(Number.MAX_VALUE)
// console.log(Number.isFinite(1.4))
// console.log(Number.isInteger(1.4))

// console.log(Number.isNaN(1.4))

// console.log(Number.isNaN("fghjkl"))// false
// console.log(isNaN("fghjk"))// true

// console.log(NaN === NaN)// false

console.log({Math})
console.log(Math.sin(Math.PI/2))// 1

console.log(Math.ceil(1.1))// 2 // lam tron len
console.log(Math.floor(1.4))// 1 // bo phan thap phan
console.log(Math.round(1.4))// 1 // lam tron thap phan
console.log(Math.round(1.5))// 2 // lam tron thap phan

console.log(Math.random())// 0.123456789

/**
 * viết hàm ramdomOTP() trả về 1 OTP (One Time Password) có độ dài length
 * nếu không truyền length thì mặc định là 6
 */
// function ramdomOTP(length){
//     otp = "";
//     for(let i=0; i<length; i++){
//         otp += Math.floor(Math.random()*6)
//     }
// return otp
// }
// console.log(ramdomOTP(6))

const listChacter = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

function generateId(length, prefix){
let id = prefix || "";
for(let i = 0; i< length; i++){
    id += listChacter[Math.floor(Math.random()*listChacter.length)]
}
return id

}
console.log(generateId(8, "user"))