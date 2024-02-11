// function countBy(x, n) {
//     let z = [];
//     for (let i = 1; i <= n; i++) {
//         z.push(i*x);
//     }
//     return z;
//   }

// menggunakan pread operator dan map 

// function countBy(x, n) {
//     return [...Array(n)].map((el,i) => (i + 1) * x);
//   }

// function expression  
const countBy = (x,n) => [...Array(n)].map((el,i) => (1+i) * x);


  console.log(countBy(2,10));