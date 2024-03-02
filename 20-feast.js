// Rules Coding Challange.
// 1. Get it done. Selesaikan Tantangan Coding tanpa bantuan 
// 2. Forget the Past. tidak melihat tantangan sebelumnya sebagai cheatcode. 


// menggunakan at atau charAt 
function feast(beast, dish) {
    return  beast.at(0) === dish.at(0)
     && beast.at(-1) === dish.at(-1)
    }

    
console.log(feast("great blue heron", "garlic naan"))