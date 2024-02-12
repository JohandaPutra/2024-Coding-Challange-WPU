// var countSheep = function (num){
//     let result = '';
//     for (let i=1;i<=num;i++){
//         result += i + ' sheep...'
//     }
//     return result
//   }

// menggunakan rest operator, map, join dan memanfaatkan string literal 
var countSheep = function (num){
    return [...Array(num)].map((el, i) => `${i+1} sheep...`).join(' ')
  }

  console.log(countSheep(9));