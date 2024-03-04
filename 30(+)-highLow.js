// Rules Coding Challange.
// 1. Get it done. Selesaikan Tantangan Coding tanpa bantuan 
// 2. Forget the Past. tidak melihat tantangan sebelumnya sebagai cheatcode. 

// wtf 
// function highAndLow(numbers){
//     return [...numbers].join('').split(' ').sort( (a,b) => a - b ).at(-1)+ ' '+[...numbers].join('').split(' ').sort( (a,b) => a - b ).at(0)
// }

function highAndLow(numbers){
    let arr = numbers.split(' ').map(Number);  
    return Math.max(...arr) + ' ' + Math.min(...arr);
  }

console.log(highAndLow("1 2 3 -3"))