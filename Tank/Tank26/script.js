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
  
  function countElement(arr) {
    const count = {};
    for (const item of arr) {
        count[item] = (count[item] || 0) + 1;
    }
    return count;
    // Xử lý và in ra kết quả
  }
  
  const result = countElement(fruits);
  
  console.log(result); // { apple: 2, banana: 2, kiwi: 3, orange: 1 }