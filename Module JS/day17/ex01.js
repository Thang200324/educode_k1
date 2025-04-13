let myName = "Thang"

console.log(myName.charAt(0))
// vong lap thong qa chuoi
for(let i =0; i<myName.length;i++){
    console.log(myName[i])
}

let age = 100
console.log(age.toString()) // chuyển đổi kiểu dữ liệu
console.log(age + "") 

// bien doi  chuoi 
let schools = "fpt uNiversity"
console.log(schools.toLocaleLowerCase()) // chuyển đổi thành chữ thường

console.log(schools.toLocaleUpperCase()) // chuyen doi thanh chu in hoa

console.log(schools)

// cat chuoi 
console.log(schools.slice(0, -4)) // cat tu vi tri 0 den vi tri cuoi cung
/**
 * slice : hỗ trợ chỉ số âm tạo ra chuỗi con được 
 * cắt từ chuỗi ban đầu nếu không cắt chuỗi được chuỗi con thì ra chuỗi rỗng
 * * substring: tương tự như slice nhưng không hỗ trợ chỉ số âm 
 * * split(spepartor, limit) : chuyển chuỗi thành mảng
 */
console.log(schools.split(" ")) // cat chuoi thanh mang tu vi tri 0 den vi tri 2

let content = `Lorem ipsum dolor sit amet consectetur 
adipisicing elit. Voluptas non tempora 
molestiae obcaecati dolor commodi at consectetur
 fugit sunt libero ullam excepturi ratione consequuntur, 
 quasi error enim! Molestias sed sunt veniam debitis ut 
 harum aperiam temporibus laborum, ullam quae quisquam
  hic recusandae expedita libero, cumque vero est fugit quod cum exercitationem labore explicabo dolorum deserunt. Aliquid nobis eligendi odit maiores in suscipit ipsum cumque nam est. Temporibus dolorum vitae error pariatur repellat iusto, quas et quod, placeat a, facere iure fugiat velit necessitatibus provident animi perferendis debitis natus accusantium architecto! Quaerat totam non debitis quia doloremque, rem inventore dignissimos voluptate?
`
/**
 * đếm xem content có bao nhiêu từ (cách nhau 1 dấu cách là 1 từ)
 */

console.log(content.split("").length)

/**
 * 
 */
let mySTr = "Học lập trình tại codefarm cùng thầy Hoàng, thầy Hoàng dạy Js rất hay"
console.log(mySTr.replaceAll("thầy Hoàng", "thầy Đông")) // thay thế tất cả các khớpkhớp
console.log(mySTr.replace("Js", "Javascript")) // thay thế 1 phần khớp đầu tiên


const arr = [
    {id : 1, name: "Nguyen Huy Huy", age: 22},
    {id : 2, name: "Nguyen Quang Hoang", age: 23},
    {id : 33, name: "Hoang Thanh Huy", age: 24},
]

/**
 * viết hàm tìm tên người (chỉ tìm tên không tìm họ)
 */
function searchName(arr, name) {
    const results = arr.filter((item) => {
        let nameArr = item.name.split(" ")
        let firtName = nameArr[nameArr.length -1]
        //console.log(firtName)
        
        return firtName === name
    })
     
    return results
    
}
console.log(searchName(arr, "Huy")
)