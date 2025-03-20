function calcBMI(weight, height){
    let bmi = (weight /(height **2)).toFixed(2)
    switch (true){
        case bmi < 18.5:
            alert("Thiếu cân")
            break;
        case bmi < 23:
            alert("Bình thường")
            break;
        case bmi < 25:
            alert("Thừa cân")
            break;
        default:
            alert("Béo phì")
            
    }
    return {bmi}
}
let weight = parseFloat(prompt("Nhập cân nặng: "))
let height = parseFloat(prompt("Nhập chiều cao: "))
calcBMI(weight, height)
