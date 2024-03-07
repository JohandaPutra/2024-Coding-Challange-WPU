// Rules Coding Challange.
// 1. Get it done. Selesaikan Tantangan Coding tanpa bantuan 
// 2. Forget the Past. tidak melihat tantangan sebelumnya sebagai cheatcode. 


function squareDigits(num){
    return  Number(String(num).split('').map((n) => Math.pow(Number(n), 2)).join(''))
  }

console.log(squareDigits(3212))