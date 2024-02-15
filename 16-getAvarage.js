// Rules Coding Challange.
// 1. Get it done. Selesaikan Tantangan Coding tanpa bantuan 
// 2. Forget the Past. tidak melihat tantangan sebelumnya sebagai cheatcode. 

// menggunakan Math.round untuk membulatkan angka
// function getAverage(marks){
//     return  Math.round(marks.reduce((acc, curr) => acc + curr)/marks.length);
// }

const getAverage = (marks) => Math.floor(marks.reduce((acc, curr) => acc + curr)/marks.length);


  console.log(getAverage([1,1,1,1,1,1,1,2]));