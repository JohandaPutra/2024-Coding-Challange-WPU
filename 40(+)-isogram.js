// Rules Coding Challange.
// 1. Get it done. Selesaikan Tantangan Coding tanpa bantuan 
// 2. Forget the Past. tidak melihat tantangan sebelumnya sebagai cheatcode. 

function isIsogram(str){
    return str.toLowerCase().split('').reduce((el,i) => {el[i] = el[i] ? el[i]+1 : 1;
        if (el[i] == 1)  el.count++; return el},{count:0}).count ==  str.length;
  }


console.log(isIsogram("12"))