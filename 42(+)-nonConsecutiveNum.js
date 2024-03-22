// Rules Coding Challange.
// 1. Get it done. Selesaikan Tantangan Coding tanpa bantuan 
// 2. Forget the Past. tidak melihat tantangan sebelumnya sebagai cheatcode. 


// function firstNonConsecutive (arr) {
//    let result = [];
//    for (let i=0;i<arr.length-1;i++){
//     if ( arr[i]+1 != arr[i+1]){
//         result.push(arr[i+1])
//     }
// }
//     return result
// }

function firstNonConsecutive(arr) {
    for (let i = 0; i < arr.length - 1; ++i) {
      if (arr[i] + 1 !== arr[i + 1]) {
        return arr[i + 1]
      }
    }
    return null
  }

console.log(firstNonConsecutive([-8,-7,-6,-4,-3,-2,-1,1]))