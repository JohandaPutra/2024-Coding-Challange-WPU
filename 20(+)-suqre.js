// Rules Coding Challange.
// 1. Get it done. Selesaikan Tantangan Coding tanpa bantuan 
// 2. Forget the Past. tidak melihat tantangan sebelumnya sebagai cheatcode. 


// var isSquare = (n) =>  (Math.sqrt(n) % 1) == 0 

// menggunakan isInteger untuk mengecek desimal 
var isSquare = (n) =>  Number.isInteger(Math.sqrt(n))  

console.log(isSquare(9))   