// Input:
const fruits = [
    "apple",
    "banana",
    "kiwi",
    "kiwi",
    "banana",
    "orange",
    "apple",
    "kiwi",
  ];
  
  function removeDuplicate(arr) {
    // Xử lý và in ra kết quả
    return arr.filter((item, index) => arr.indexOf(item) === index);
    
  }
  
  // Output:
  const result = removeDuplicate(fruits);
  
  console.log(result); // ["apple", "banana", "kiwi", "orange"]