// const arr1 = [
//     {id: 1 , name: "product 1", price: 7000},
//     {id: 2 , name: "product 2", price: 1000},
//     {id: 3 , name: "product 3", price: 5000},


// ]
// const arr2 = arr1.sort((a,b)=> a.price - b.price)
// const arr3 = arr1.sort((a,b)=> b.price + a.price)

// console.log(arr2)
// console.log(arr3)

// // viết hàm vào mảng users và trả về danh sách user được sắp xếp theo user từ a-zz
// const users = [
//     {id: 1, username: "thang", email: "thang@gmail.com", age: 21},
//     {id: 2, username: "minh", email: "minh@gmail.com", age: 22},
//     {id: 3, username: "quan", email: "quan@gmail.com", age: 23},
//     {id: 4, username: "hoang", email: "hoang@gmail.com", age: 24},
// ]
// function sortUser(users){
//     const user = structuredClone(users);
//     user.sort((a,b)=> {
//         if(a.username < b.username){
//             return -1
//         }
//     })
//     return user
// }
// console.log(sortUser(users))

/**
 * sắp xếp lại mảng ar với các số từ số bé đến số lớn và xếp trước , sau đó đếm chuỗi xếp theo a-z , các falsy values để cuối mảng , bỏ qua các empty valuesvalues
 */
const arr = [1,2,5,-1, "hoang", "thnag", "yen", "anh", null, NaN, "", ,,100];
const arr3 =[]



function sortNumber(arr){
//   for(let i =0;i< arr.length; i++ ){
//     console.log(arr[i])
//   }
   const arrcopy = arr.flat(1)
   console.log(arrcopy)
   const stringArr =[]
   const numberArr =[]
   const falsyValueArr =[]

   arrcopy.forEach(element => {
    if(!element) falsyValueArr.push(element)
    else if(typeof element ==="string") stringArr.push(element)
    else if(typeof element ==="number" && !isNaN(element)) numberArr.push(element)
   });
//console.log(stringArr, numberArr, falsyValueArr)
return [
    ...numberArr.sort((a,b)=> a-b), 
    ...stringArr.sort(), 
    ...falsyValueArr]
}
console.log(sortNumber(arr))

/**
 * Sort()
 * input : không nhập hoặc nhập 1 compareFn
 * thay đổi mảng ban đầu (nêú không muốn thay đổi mảng ban đầu -> dùng toSorted())
 * chỉ thực hiện so sánh chuỗi , nếu so sánh số thì kết quả không chính xác
 * compareFn: âm thì a trước b , dương thì a sau b , ===0 thì không đổi chỗchỗ
 */





