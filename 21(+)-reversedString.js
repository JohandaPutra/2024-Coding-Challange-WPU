// Rules Coding Challange.
// 1. Get it done. Selesaikan Tantangan Coding tanpa bantuan 
// 2. Forget the Past. tidak melihat tantangan sebelumnya sebagai cheatcode. 


// function solution(str){
//     let result = '';
//     for (let i = str.length-1 ; i >= 0; i--) {
//         result += str[i]
//     }
//     return result
// }

// menggunakan split untuk menjadikan array  dengan reverse dan join 
// function solution(str){
//   return str.split().reverse().join('');  
// }

const  solution = (str) => [...str].reverse().join('');  


console.log(solution('world'))