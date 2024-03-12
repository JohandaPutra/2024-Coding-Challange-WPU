// Rules Coding Challange.
// 1. Get it done. Selesaikan Tantangan Coding tanpa bantuan 
// 2. Forget the Past. tidak melihat tantangan sebelumnya sebagai cheatcode. 


// var number = function(busStops){
//     return busStops.map(a => a[0]-a[1]).reduce((acc,curr) => acc + curr);
//   }

const number = (busStops) => busStops.reduce((rem, [on, off]) => rem + on - off, 0);

console.log(number([[10,0],[3,5],[5,8]]))