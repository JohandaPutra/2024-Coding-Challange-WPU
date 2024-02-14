// Rules Coding Challange.
// 1. Get it done. Selesaikan Tantangan Coding tanpa bantuan 
// 2. Forget the Past. tidak melihat tantangan sebelumnya sebagai cheatcode. 


// function sumArray(array) {
//     if (array === null || array <= 2 ) return 0; 
//     const sorted = array.sort((a, b) => a - b);

//     let result = 0;
//     for (let i = 1; i < array.length - 1; i ++) {
//          result += array[i];
//     }
//     return result;
// }

// menggunakan sort, slice dan reduce 
// function sumArray(array) {
//     return array === null || array.length <= 2 ? 0 : array.sort((a, b) => a - b).slice(1,-1).reduce((acc, curr) => acc+curr);
// }

const sumArray = (array) => array == null || array.length <= 2 ? 0 : array.sort((a, b) => a - b).slice(1,-1).reduce((acc, curr) => acc+curr);


console.log(sumArray([ 6, 2, 1, 8, 10 ]));