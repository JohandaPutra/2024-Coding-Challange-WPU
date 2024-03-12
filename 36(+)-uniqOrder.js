// Rules Coding Challange.
// 1. Get it done. Selesaikan Tantangan Coding tanpa bantuan 
// 2. Forget the Past. tidak melihat tantangan sebelumnya sebagai cheatcode. 

// var uniqueInOrder=function(iterable){
//     let result = [];
//     for ( let i = 0; i < iterable.length; i++){
//         iterable[i] != iterable[i+1] ? result.push(iterable[i]) : '';
//     }
//     return result;
//   }

var uniqueInOrder=function(iterable){
    console.log([...iterable].filter((a,b) => a != iterable[b+1]))
  }


  console.log(uniqueInOrder('AAAABBBCCDAABBB'))