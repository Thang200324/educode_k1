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
    NaN,
    undefined,
    null,
    NaN,
    undefined,
    null,
  ];
  
  function removeDuplicate(arr) {
    // Xử lý và in ra kết quả
    return arr.filter((item, index) => {
        if (item !== item) { 
            return arr.findIndex(x => x !== x) === index;
        }
        return arr.indexOf(item) === index;
    });
    
  }
  
  // Output:
  const result = removeDuplicate(fruits);
  
  console.log(result); // ["apple", "banana", "kiwi", "orange"]