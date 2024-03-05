// Rules Coding Challange.
// 1. Get it done. Selesaikan Tantangan Coding tanpa bantuan 
// 2. Forget the Past. tidak melihat tantangan sebelumnya sebagai cheatcode. 

function findShort(s){
    return Math.min(...s.split(" ").map (s => s.length));
}


console.log(findShort("bitcoin take over the world maybe who knows perhaps"))