// const myinfo = {
//     name: "Thangg",
//     age: 20,
// }
// /**
//  * ! Phương thức  tĩnh của Object
//  */
// console.log(Object.keys(myinfo))
// console.log(Object.values(myinfo))
// console.log(Object.entries(myinfo))
// console.log(Object.fromEntries(Object.entries(myinfo)))

const products = [
    {id:1, name: "may tinh", price: 100, quanlyti: 1},
    {id:2, name: "may tinh abc", price: 1003, quanlyti: 8},

]

function Cart(userId, products){
    this.products = products
    this.userId = userId
    
}

// Cart.calc = function(){
//     this.calc = function (){
//         for(let i = 0; i<products.length; i++){
//                    total += this.products.price * this.products.quanlyti
//         }
//         // return products.reduce((total, pro) => total + pro.price * pro.quanlyti, 0);       
// return total;
//     };
// }
// const cartof = new Cart("124", products)
