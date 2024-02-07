// const reverseSeq = n => {
//     const result = [];
//     for (let i = n; i >= 1; i--){
//         result.push(i);
//     }
//     return result;
//   };


// const reverseSeq = n => {
//     return Array(n).fill().map((el, i) => n - i);
//   };


// const reverseSeq = n => [...Array(n)].fill().map((el,i) => n-i);

const reverseSeq = length => Array.from({length}, () => length--)

console.log(reverseSeq(5));