// Rules Coding Challange.
// 1. Get it done. Selesaikan Tantangan Coding tanpa bantuan 
// 2. Forget the Past. tidak melihat tantangan sebelumnya sebagai cheatcode. 

// function countSheeps(sheep) {
//     let result = 0;
//     for (let i = 0; i < sheep.length; i++) {
//         if (sheep[i] == true ) {
//             result += 1;
//         }
//     }
//     return result;
//  }

//  menggunakan filter untuk menyaring boolean 
 function countSheeps(sheep) {
    return sheep.filter(Boolean).length;
 }



// menggunakan reduce
// function countSheeps(sheep) {
//    return sheep.reduce((a,b) => a+ (b? 1 : 0),0)
// }

console.log(countSheeps([true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true]));