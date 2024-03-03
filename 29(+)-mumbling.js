// Rules Coding Challange.
// 1. Get it done. Selesaikan Tantangan Coding tanpa bantuan 
// 2. Forget the Past. tidak melihat tantangan sebelumnya sebagai cheatcode. 


// one step for coding, one leap for logic 
function accum(s) {
  return [...s].map((acc,curr)=> acc.toUpperCase()+acc.repeat(curr).toLowerCase()).join('-')
} 



console.log(accum("ZpglnRxqenU"))