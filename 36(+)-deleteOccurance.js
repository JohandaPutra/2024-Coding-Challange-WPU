// Rules Coding Challange.
// 1. Get it done. Selesaikan Tantangan Coding tanpa bantuan 
// 2. Forget the Past. tidak melihat tantangan sebelumnya sebagai cheatcode. 


function deleteNth(arr,x) {
    let cache = [];
    return arr.filter((n) => {
        cache[n] = cache[n]? cache[n]+1 : 1;
        return cache[n] <= x;
    });
  }

console.log(deleteNth([12,39,19,39,39,19,12], 2))