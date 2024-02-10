// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//     result = false;
//     if (distanceToPump/mpg == fuelLeft) {
//         result = true
//     };
//     return result;
//   };

// menggunakan function expression  
const zeroFuel = (distanceToPump, mpg, fuelLeft) => distanceToPump/mpg <= fuelLeft;

console.log(zeroFuel(100,20,));