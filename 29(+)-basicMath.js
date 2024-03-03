// Rules Coding Challange.
// 1. Get it done. Selesaikan Tantangan Coding tanpa bantuan 
// 2. Forget the Past. tidak melihat tantangan sebelumnya sebagai cheatcode. 


// function basicOp(operation, value1, value2){
//    let result = 0; 
//    switch (operation) {
//         case '+':
//             result = value1 + value2;
//             break;
    
//         case '-':
//             result = value1 - value2;
//             break;
//         case '*':
//             result =value1 * value2;
//             break;
//         default:
//             result = value1 / value2;
//             break;
//     }
//     return result
//   }

// menggunakan eval untuk melihat evaluasi nilai dari string 
function basicOp(operation, value1, value2){
  return eval(value1+operation+value2)
  }

  console.log(basicOp("+", 4, 7))