// Rules Coding Challange.
// 1. Get it done. Selesaikan Tantangan Coding tanpa bantuan 
// 2. Forget the Past. tidak melihat tantangan sebelumnya sebagai cheatcode. 


function expandedForm(num) {
    return (''+num).split('').map((e,i,array) => +e* Math.pow(10,(array.length-1-i)) ).filter(a => a!=0).join(' + ')
  }

console.log(expandedForm(12))