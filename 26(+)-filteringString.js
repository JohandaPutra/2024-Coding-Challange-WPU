// Rules Coding Challange.
// 1. Get it done. Selesaikan Tantangan Coding tanpa bantuan 
// 2. Forget the Past. tidak melihat tantangan sebelumnya sebagai cheatcode. 


// function filter_list(l) {
//     let result  = [];
//     for (let i = 0;  i < l.length; i++) {
//         typeof l[i] != 'string' ? result.push(l[i]) : '' 
//     }
//     return result;
//   }

// menggunakan filter dan typeof untuk mencari tipe objek
//   function filter_list(l) {
//     return l.filter((num) => ( typeof num != 'string'))
//   }

const filter_list = (l) => l.filter((num) => ( typeof num != 'string'))
  


  console.log(filter_list([1,2,'a','b']))