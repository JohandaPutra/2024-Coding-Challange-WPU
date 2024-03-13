// Rules Coding Challange.
// 1. Get it done. Selesaikan Tantangan Coding tanpa bantuan 
// 2. Forget the Past. tidak melihat tantangan sebelumnya sebagai cheatcode. 


function squareSum(numbers){
    return numbers.reduce((e,i) =>  e + (i*i),0)
}

console.log(squareSum([1,2,5])) //5 