// Rules Coding Challange.
// 1. Get it done. Selesaikan Tantangan Coding tanpa bantuan 
// 2. Forget the Past. tidak melihat tantangan sebelumnya sebagai cheatcode. 


var number=function(array){
    return array.map((a,b) => `${b+1}: ${a}`)
  }


console.log(number(['a','b','c']))