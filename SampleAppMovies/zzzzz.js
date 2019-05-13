// for (i = 0; i <= 5; i++) {
//     (function (j){setTimeout(function timer() {
//         console.log(j)
//     }, j * 1000)
// })(i);
// }

// for ( i=0; i<=5; i++){
//     (function (j) {
//         // var j = i;
//         setTimeout( () => {
//             console.log(j)
//         }, j*1000);
//     })(i)
// }

for (let i=0; i<=5; i++) {
    setTimeout(() => {
        console.log(i)
    }, i*1000);
}