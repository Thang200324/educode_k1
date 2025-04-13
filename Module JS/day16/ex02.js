/**
 * reduce ((acc, cur, idx, arr) => {}, initialValue)
 * acc: giá trị tích lũy (giá trị trả về của hàm trong lần lặp trước đó) -> biển tích lũy
 * cur: giá trị hiện tại trong mảng -> phẩn tử được duyệt hiện tạitại
 * idx: chỉ số của giá trị hiện tại trong mảng -> phần tử được duyệtduyệt
 * arr: mảng gốc -> mảng ban đầu
 * initialValue: giá trị khởi tạo cho acc (nếu không có thì giá trị đầu tiên của mảng sẽ được sử dụng làm giá trị khởi tạo)
 */
/**
 * Tính giai thừa với reduce cho số n
 * Tính tích phần tử trong mảng với reduce : [1,2,3,4,5,6,7]
 */

const arr = [1,2,3,4,5,6,7]
// const arr2 = arr.reduce((a,b)=> {
//     console.log(a,b)
//     return a*b
// })
function factorial(arr){
    const tmp = [];
    arr.reduce((acc, cur, index, arr)=> {
        console.log(acc, cur, index, arr)
        return acc * cur
    })

}
factorial(arr)

const animals = ["cat", "dog", "elephant", "giraffe", "lion", "cat", "dog", "elephant", "giraffe", "lion"];
function countAnimals(arr){
   return arr.reduce((acc, cur)=> {
        //console.log(acc)
        if(acc[cur]){
            acc[cur]++
        }else{
            acc[cur]= 1
        }
        return acc
    },{})
}
console.log(countAnimals(animals))
    


