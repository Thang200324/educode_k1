// function printAnimals(animals){
//     let content = /*html */`<table>
//         <thead>
//             <tr>
//                 <th>STT</th>
//                 <th>Tên</th>
//             </tr>
//         </thead>
//         <tbody>
//     `
//     Array.isArray(animals) && animals.forEach((item,index)=> {
//         content += /*html */` <tr>
//         <td>${index + 1}</td>
//         <td>${item.name}</td>
//         </tr>
//         `
//     })
//     content += `</tbody>
//     </table>`
//     document.write(content)
// }

// const animals = [
//     { name: "Chó" },
//     { name: "Mèo" },
//     { name: "Gà" },
//     { name: "Vịt" },
//     { name: "Ngỗng" },
//     { name: "Cú" },
//     { name: "Bồ câu" },
//     { name: "Chim cánh cụt" },
//     { name: "Cá heo" },
//     { name: "Khỉ" }
// ]
// printAnimals(animals)

// /**
//  * templates string ``
//  * tư duy và 
//  */

const animals = [ 
    {id : 1, name: "Chó"},
    {id : 2, name: "Mèo"},
    {id : 3, name: "Gà"},
    {id : 4, name: "Vịt"},
    {id : 5, name: "Ng��ng"},
    {id : 6, name: "Cú"},
    {id : 7, name: "Bồ câu"},
 ];
/**
 * find(): dùng fifi
 */
// function findAnimal(animals){
//    if( Array.isArray){
//       const restuls = animals.find((item, index, arr) => {
        
//         return item === "duck" // tìm thấy duck thì dừng lại 
//         // 
//     })
//     console.log(restuls)  // 
// }}
// const animal = animals.find((item)=> item === "dog")
// function findIndexAnimal(animals){
//     return  Array.isArray(animals) && animals.findIndex((item) => (item.name === "Cú"))
//     }

//  console.log(findIndexAnimal(animals)) 
/**
 * find(): callback 
 * find(): item, index, arr
 * output: item / underfinde 
 * findLast() : tìm từ cuối lên đầu
 */

/**
 * filter(): lọc 
 */
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, -10]

const restuls = arr.filter((item, index, arr)=> item < 5)

console.log(restuls)

const arr1 = [ 
    {id : 1, name : "Nguyen Van A", age: 22},
    {id : 2, name : "Nguyen Van B", age: 18},
    {id : 3, name : "Nguyen Van C", age: 22},
    {id : 4, name : "Nguyen Van D", age: 15},
    {id : 5, name : "Nguyen Van E", age: 20},
    {id : 6, name : "Nguyen Van F", age: 17},
]

function filterAge(arr1){
    return Array.isArray(arr1) && arr1.filter((item, index, arr)=> item.age <= 20 )
}
console.log(filterAge(arr1))

