// function hero(bullets, dragons){
//     if (bullets/2 >= dragons) {
//         return true
//     } else{
//         return false
//     } 
//     }


// menggunakan ternari
// function hero(bullets, dragons){
//     return bullets/2 >= dragons ? true : false;
//     }

// menggunakan function expression

const hero = (bullets,dragons) => bullets/2 >= dragons;

    console.log(hero(10,5));