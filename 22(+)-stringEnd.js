// Rules Coding Challange.
// 1. Get it done. Selesaikan Tantangan Coding tanpa bantuan 
// 2. Forget the Past. tidak melihat tantangan sebelumnya sebagai cheatcode. 


// function solution(str, ending){
//     return str.slice(-ending.length) === ending
//   }

// menggunakan endwith 
const solution = (str, ending) => str.endsWith(ending);

 console.log(solution('abcde', 'cde'));