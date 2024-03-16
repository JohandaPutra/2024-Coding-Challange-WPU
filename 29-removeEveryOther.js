// Rules Coding Challange.
// 1. Get it done. Selesaikan Tantangan Coding tanpa bantuan 
// 2. Forget the Past. tidak melihat tantangan sebelumnya sebagai cheatcode. 


function removeEveryOther(arr){
    return arr.filter((el,i) => i % 2 ==0)
  }


console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']))