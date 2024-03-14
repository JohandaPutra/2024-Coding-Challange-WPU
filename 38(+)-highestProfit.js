// Rules Coding Challange.
// 1. Get it done. Selesaikan Tantangan Coding tanpa bantuan 
// 2. Forget the Past. tidak melihat tantangan sebelumnya sebagai cheatcode. 


// function minMax(arr){
//     const sorted = arr.sort((a,b) => a-b)
//     return [sorted[0], sorted[sorted.length-1]] 
// }

function minMax(arr){
    return [Math.min(...arr), Math.max(...arr)];
  }

console.log(minMax([1,2,3,5]))