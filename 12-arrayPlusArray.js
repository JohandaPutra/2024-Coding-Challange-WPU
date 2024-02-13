// Rules Coding Challange.
// 1. Get it done. Selesaikan Tantangan Coding tanpa bantuan 
// 2. Forget the Past. tidak melihat tantangan sebelumnya sebagai cheatcode. 


// menggunakan reduce 
// function arrayPlusArray(arr1, arr2) {
//     return arr1.reduce((sum, currentValue) => sum + currentValue) + arr2.reduce((sum, currentValue) => sum + currentValue);;
// }

// menggunakan arguments dan reduce 
// function arrayPlusArray(arr1, arr2) {
//     let total = 0;
//     for (let i = 0; i < arguments.length; i++) {
//        total += arguments[i].reduce((sum, currentValue) => sum + currentValue)
//     } 
//     return total; 
// }

// menggunakan spread operator dan reduce 
// function arrayPlusArray(arr1, arr2) {
//     return  [...arr1, ...arr2].reduce((sum, cur) => sum + cur)
// }

// oneliner
const arrayPlusArray = (...arrays) =>  [].concat(...arrays).reduce((sum, cur) => sum + cur)


console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));