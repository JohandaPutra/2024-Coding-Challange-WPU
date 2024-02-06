// function grow(x){
//     let result = x[0];
//         for (let i=1;i<x.length;i++){
//             result *= x[i];  
//         };
//     return result;
// };

// // menggunakan metode reduce dalam js (callbackfunction)
// function grow(x){
//     const result = x.reduce((acc, curr)=> acc*curr);
//     return result 
// }

// penggunaan function expression
const grow = x => x.reduce((acc, curr) => acc * curr);

console.log(grow([2,2,2,2,2,2])); // 6