/**
 * some()
 */
const numbers = [1, 2, 3, 4, 5];
const chekc = numbers.some((item) => item % 2 === 0)
console.log(chekc) // true

const students = [
    {id: 1, name: "hoang", gender: "male"},
    {id: 2, name: "an", gender: "male"},
    {id: 3, name: "huong", gender: "male"},
    {id: 4, name: "an", gender: "male"},
    {id: 5, name: "vu", gender: "male"},
]
const checkstudents = students.some((item) => item.gender ==="female")

console.log(checkstudents)

/**
 * every(): trả về tất cả khi mà tất cả đều đúng
 */
const restuls = students.every((item)=> item.gender ==="male")
console.log(restuls)
