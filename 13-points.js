// Rules Coding Challange.
// 1. Get it done. Selesaikan Tantangan Coding tanpa bantuan 
// 2. Forget the Past. tidak melihat tantangan sebelumnya sebagai cheatcode. 


// function points(games) {
//   let result = 0;
//   for (let i = 0; i < games.length; i++) {
//       if (games[i][0] > games[i][2]){
//         result += 3;
//       } else if (games[i][0] == games[i][2]) {
//         result += 1;
//       } 
//   }   
//   return result;
// }

// menggunakan tenari 
// function points(games) {
//   let result = 0;
//   for (let i = 0; i < games.length; i++) {
//       games[i][0] > games[i][2] ?result += 3 : games[i][0] == games[i][2] ? result += 1 : '';
//   }
//   return result;
// }

// menggunakan reduce dengan array 2 
function points(games) {
 const result = games.reduce((acc, [x, _, y]) => (x > y ? 3 : x == y ? 1 : 0) + acc, 0);
 return result;
}


  console.log(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]));