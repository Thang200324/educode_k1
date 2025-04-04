function filterLongStrings(arr) {

    return Array.isArray(arr) && arr.filter((item)=> item.length > 5)
    

    // Xử lý và in ra kết quả 
  }
  // Test
  console.log(filterLongStrings(["hello", "world", "javascript", "nodejs"])); // Output: ["javascript", "nodejs"]

  console.log(filterLongStrings(["hi", "hello world", "a b c", "goodbye!!"])); // Output: ["hello world", "goodbye!!"]
  console.log(filterLongStrings(["hi", "bye", "yes"]))// Output: []



  function filterEvenNumbers(arr) {
    return Array.isArray(arr) && arr.filter((item)=> item % 2 ===0)
    // Xử lý và in ra kết quả
  }
  
  // Test
  
  console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6])) // Output: [2, 4, 6]
  console.log(filterEvenNumbers([1, 3, 5, 7])); // Output: []
  console.log(filterEvenNumbers([])); // Output: []
  console.log(filterEvenNumbers([-2, -1, 0, 1, 2])); // Output: [-2, 0, 2]


  /// bai 3
  function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true;
  }
  
  function findMinMaxAverage(arr) {
    if (!arr.length) return null;
  
    let max = arr[0];
    let min = arr[0];
    let maxIndex = 0;
    let minIndex = 0;
  
    let primeSum = 0;
    let primeCount = 0;
  
    arr.forEach((num, index) => {
      if (num > max) {
        max = num;
        maxIndex = index;
      }
      if (num < min) {
        min = num;
        minIndex = index;
      }
      if (isPrime(num)) {
        primeSum += num;
        primeCount++;
      }
    });
  
    const primeAverage =
      primeCount > 0 ? parseFloat((primeSum / primeCount).toFixed(2)) : null;
    return {
      max,
      maxIndex,
      min,
      minIndex,
      primeAverage,
    };
  }
  // Test
  console.log(findMinMaxAverage([3, 1, 4, 1, 5, 9, 2, 6])); // Output: {max: 9, maxIndex: 5, min: 1, minIndex: 1, primeAverage: 3.33 }
  console.log(findMinMaxAverage([5, 5, 2, 2, 1])); // Output: {max: 5, maxIndex: 0, min: 1, minIndex: 4, primeAverage: 3.5 }
  console.log(findMinMaxAverage([-3, 7, -8, 11, 0]))

  // bai 4
  function cleanFalsyValues(arr) {
    // Xử lý và in ra kết quả
    return Array.isArray(arr) && arr.filter((item) => Boolean(item))
  }
  
  // Test
  
console.log(cleanFalsyValues([1, 0, "", null, "hello", undefined, NaN, 2, 3])) // Output: [1, "hello", 2, 3]


function insertNumber(arr, num) {
  const cleanArr = arr.filter((item) => typeof item === 'number' && !isNaN(item));

  cleanArr.sort((a, b) => a - b);

  if (typeof num === 'number' && !isNaN(num)) {
    let index = 0;
    while (index < cleanArr.length && cleanArr[index] < num) {
      index++;
    }
    cleanArr.splice(index, 0, num); 
  }

  console.log(cleanArr);
  return cleanArr;
}
insertNumber([1, 3, 5, 7, 9], 6); // Output: [1, 3, 5, 6, 7, 9]
insertNumber([3, "hello", 1, NaN, 4, null], 2); // Output: [1, 2, 3, 4]
insertNumber([], 5); // Output: [5]
insertNumber([-1, 10, -5, "abc"], -3); // Output: [-5, -3, -1, 10]
insertNumber([5, 2, 8], NaN); // Output: [2, 5, 8]