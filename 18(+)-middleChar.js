// Rules Coding Challange.
// 1. Get it done. Selesaikan Tantangan Coding tanpa bantuan 
// 2. Forget the Past. tidak melihat tantangan sebelumnya sebagai cheatcode. 

// function getMiddle(s)
// {
//     if (s.length  % 2 == 0) {
//       return s.slice((s.length/2) -1, (s.length/2)+1)
//     } else {
//         return s.slice(Math.floor(s.length/2), Math.ceil(s.length/2));
//     }
// }


// menggunakan slice  
// const getMiddle = (s) =>
//       s.slice((s.length-1)/2, (s.length/2)+1) 

// menggunakan substr 
const getMiddle = (s) =>
      s.substr((s.length-1)/2, (s.length % 2)+1) 




console.log(getMiddle("1234115"))