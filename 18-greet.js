// Rules Coding Challange.
// 1. Get it done. Selesaikan Tantangan Coding tanpa bantuan 
// 2. Forget the Past. tidak melihat tantangan sebelumnya sebagai cheatcode. 

// function greet (name, owner) {
//     return name === owner ? 'Hello boss' : 'Hello guest';
//   }

// menggunakan string literal 
const  greet = (name, owner) =>  
    `Hello ${name === owner ? 'boss' : 'guest'}` 
  

console.log(greet('Daniel', 'Daniel'));