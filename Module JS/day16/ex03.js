const animals = ["cat", "dog", "elephant", "giraffe", "lion", "cat", "dog", "elephant", "giraffe", "lion"];
function coutAnimal(arr){
    return arr.reduce((acc,cur)=> {
    //    if(acc.findIndex((item)=> item === cur) ===-1){
    //     acc.push(cur)
    //    }
       if(!acc.includes(cur)){
        acc.push(cur)
       }
       return acc
        
    },[])
}
console.log(coutAnimal(animals))
