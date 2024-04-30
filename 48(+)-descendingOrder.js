// Rules Coding Challange.
// 1. Get it done. Selesaikan Tantangan Coding tanpa bantuan 
// 2. Forget the Past. tidak melihat tantangan sebelumnya sebagai cheatcode. 


function descendingOrder(n){
    return  +((''+n).split('').sort((a,b) => b-a).join(''))
  }


console.log(descendingOrder(12));