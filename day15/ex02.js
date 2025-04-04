/**
 * map()
 * input: item, index, arr
 * output: trả về mnagr đã biến đổi từ ban đầu
 */

const arr1 = [ 
    {id : 1, name : "Nguyen Van A", age: 22},
    {id : 2, name : "Nguyen Van B", age: 18},
    {id : 3, name : "Nguyen Van C", age: 22},
    {id : 4, name : "Nguyen Van D", age: 15},
    {id : 5, name : "Nguyen Van E", age: 20},
    {id : 6, name : "Nguyen Van F", age: 17},
]
const restuls = arr1.map((item )=> {
    return {
        ...item,
        role: "admin",
    }
})
console.log(restuls)

const products = [
    {id: 1, name: "kiwi", price: 100, quantity: 2},
    {id: 2, name: "chuoi", price: 200, quantity: 3},
    {id: 3, name: "tao", price: 300, quantity: 4},
    
]
const toatl = products.map((item, index, arr) => {
    return {
        ...item,
        amout: item.price * item.quantity 
    }
})
console.log(toatl)
