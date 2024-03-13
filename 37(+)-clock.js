// Rules Coding Challange.
// 1. Get it done. Selesaikan Tantangan Coding tanpa bantuan 
// 2. Forget the Past. tidak melihat tantangan sebelumnya sebagai cheatcode. 


// function past(h, m, s){
//     const time = {
//         h : 3600000,
//         m : 60000,
//         s : 1000
//     }
//     return time.h * h + time.m * m + time.s * s;
//   }

function past(h, m, s){
    return h*3600000+m*60000+s*1000
  }

console.log(past(0,1,1))