// Rules Coding Challange.
// 1. Get it done. Selesaikan Tantangan Coding tanpa bantuan 
// 2. Forget the Past. tidak melihat tantangan sebelumnya sebagai cheatcode. 

// function solution(str){
//     let result = [];
//         for (let  i = 0;  i <= str.length - 1; i+=2) {
//             result.push((str.slice(i, i+2)))
//     }   
//     str.length %  2 === 1 ? result[Math.floor(str.length/2)]+='_' : ''
//     return result 
// }


// menggunakan match untuk menghitung 2 kelipatan 
function solution(s){
    return (s+"_").match(/.{2}/g)||[]
 }


  console.log(solution("abcde"));