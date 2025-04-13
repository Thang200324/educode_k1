// // const My = {
// //     name : "Thang",
// //     email: "thangc@gmail.com",
// //     potison: "fghjkl",
// // };

// // for(key in My){
// //     console.log(`${key} - ${My[key]}`)
// // }

// const ob1 = {};
// //* object literal

// const ob2 = new Object({name: "a"});
// //* dung ham khoi tao co san object

// //* dung factory Function 

// function Motor(name, color, price, brand){
//     return {
//         name,
//         color,
//         price,
//         brand,
//     };
// }
// const moto1 = Motor("Junter", "blue", 239999, "yamaha")
// const moto2 = Motor("SH", "gray", 23456789, "hoda")
// //* dung Constructor Function

// function Car(name, color, price, brand) {
//     this.name = name;
//     this.color = color;
//     this.price = price;
//     this.brand = brand;
// }
// const car1 = new Car("Civic", "red", 500000, "Honda");
// const car2 = new Car("Corolla", "white", 600000, "Toyota");

// console.log(car1);
// console.log(car2);

// //* dung Class

// class Bike {
//     constructor(name, color, price, brand) {
//         this.name = name;
//         this.color = color;
//         this.price = price;
//         this.brand = brand;
//     }
// }

// const bike1 = new Bike("Ducati", "black", 1500000, "Ducati");
// const bike2 = new Bike("Harley", "silver", 2000000, "Harley-Davidson");

// console.log(bike1);
// console.log(bike2);

// // Có 4 cách chính để tạo ra object trong JavaScript:

// // 1. Object Literal
// const objLiteral = { key: "value" };
// console.log("Object Literal:", objLiteral);

// // 2. Constructor Function
// function ConstructorExample(key) {
//     this.key = key;
// }
// const objConstructor = new ConstructorExample("value");
// console.log("Constructor Function:", objConstructor);

// // 3. Factory Function
// function factoryFunction(key) {
//     return { key };
// }
// const objFactory = factoryFunction("value");
// console.log("Factory Function:", objFactory);

// // 4. Class
// class ClassExample {
//     constructor(key) {
//         this.key = key;
//     }
// }
// const objClass = new ClassExample("value");
// console.log("Class:", objClass);

// // Các cách khác để tạo object:

// // 5. Object.create()
// const objCreate = Object.create({ key: "value" });
// console.log("Object.create():", objCreate);

// // 6. JSON.parse()
// const jsonString = '{"key": "value"}';
// const objJSON = JSON.parse(jsonString);
// console.log("JSON.parse():", objJSON);

// // 7. Using Map and converting to Object
// const map = new Map([["key", "value"]]);
// const objFromMap = Object.fromEntries(map);
// console.log("Object from Map:", objFromMap);

// // 8. Using Object.assign()
// const objAssign = Object.assign({}, { key: "value" });
// console.log("Object.assign():", objAssign);


