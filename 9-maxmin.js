// var min = function(list){
//     for (let i = 0; i < list.length; i++){
//         if (list[0] > list[i]){
//             list[0] = list[i];
//         };
//     }
//     return list[0];
// }

// // menggunakan ternari operator
// // function max(list) {
// //     for (let i = 0; i < list.length; i++) {
// //         list[0] <= list[i] ? list[0] = list[i] : '';
// //     }
// //     return list[0];
// // }

// menggunakan function sort 
// const min = (list) => list.sort((a, b) => a - b)[0];
// const max = (list) => list.sort((a, b) => b - a)[0];


// menggunakan math operator min dan max 
const min = (list) => Math.min(...list);
const max = (list) => Math.max(...list);



console.log(min([-52, 56, 30, 29, -54, 0, -110]));
console.log(max([4,6,2,1,9,63,-134,566]));