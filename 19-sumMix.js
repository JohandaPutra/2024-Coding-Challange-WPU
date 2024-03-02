// Rules Coding Challange.
// 1. Get it done. Selesaikan Tantangan Coding tanpa bantuan 
// 2. Forget the Past. tidak melihat tantangan sebelumnya sebagai cheatcode. 

// menambahkan '+' sebelum bilangan array akan merubah nilai array menjadi integer 
function sumMix(x){
    return x.reduce( (acc, cur) => acc + +cur, 0)
}

console.log(sumMix([9, 3, '7', '3']))