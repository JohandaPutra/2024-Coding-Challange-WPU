// Rules Coding Challange.
// 1. Get it done. Selesaikan Tantangan Coding tanpa bantuan 
// 2. Forget the Past. tidak melihat tantangan sebelumnya sebagai cheatcode. 

function updateLight(current) {
  
    return current == 'green' ? 'yellow' : current == 'yellow' ? 'red' :  'green';
  
  }

console.log(updateLight("green"))