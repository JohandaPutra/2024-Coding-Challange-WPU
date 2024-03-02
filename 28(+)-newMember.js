// Rules Coding Challange.
// 1. Get it done. Selesaikan Tantangan Coding tanpa bantuan 
// 2. Forget the Past. tidak melihat tantangan sebelumnya sebagai cheatcode. 


// function openOrSenior(data){
//     let result = [];
//     for (let i = 0; i < data.length; i++){
//         if (data[i][0] >= 55 && data[i][1] >7){
//             result.push('Senior');
//         } else {
//             result.push('Open');
//         }
//     }
//     return result
//   }

// menggunakan map 
function openOrSenior(data){
    return data.map(([a,b]) => (a >= 55 && b > 7) ? 'Senior' : 'Open') 
  }

console.log(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]));