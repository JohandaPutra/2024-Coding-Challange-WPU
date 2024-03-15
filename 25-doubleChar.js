// Rules Coding Challange.
// 1. Get it done. Selesaikan Tantangan Coding tanpa bantuan 
// 2. Forget the Past. tidak melihat tantangan sebelumnya sebagai cheatcode. 


function doubleChar(str) {
    return str.split('').map(el => el + el).join('')
  }
  
  
console.log(doubleChar("abcd"))