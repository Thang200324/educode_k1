/**
 * viết hàm sortName() theo tên người dùng từ a-z (chỉ sắp xếp theo tên , nếu trùng tên , mới sắp xếp theo họ + tên đệm)
 
 */
const arr = [
	{ id: 1, fullname: "Nguyen Anh Huy", age: 32 },
	{ id: 2, fullname: "Nguyen Huy Hoang", age: 10 },
	{ id: 3, fullname: "Hoang Thanh Huy", age: 30 },
	{ id: 4, fullname: "Lê Đạt", age: 30 },
	{ id: 5, fullname: "Lê Duy Đạt", age: 30 },
	{ id: 6, fullname: "Huy Quốc", age: 30 },

];
function hfullName(arr,fullname){
    const results = arr.filter((item)=>{
        let namez = item.fullname.split(" ")
        let namb = item.fullname.split(" ")
        let firstName = namez[namez.length -1]
        let lastName = namb[namb.length -2]


        console.log(firstName)
        console.log(lastName)  
        //  return firstName === fullname
    })
    return results
}
console.log(hfullName(arr, "Huy"))