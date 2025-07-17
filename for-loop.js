//syntex \\
/**
 * for (condition ; condition ; condition){
 * 
 * }
*/


// for (let i = 0; i<= 10; i++){
//       console.log('Bakir',i);
// }


//100 porjonto jaba kintu 2  2 kore badh diye
// for (let i = 0; i<=100; i+=2){
//       console.log('sorry lord...',i);
// }


//prottek ta array element k access kora alada alada kore
const nums = [10,12,23,244,45,32,54,56];

// let sumOfOdd = 0;
// let sumOfEven = 0;

// for (let i = 0; i < nums.length ; i++){
//      const x = nums[i];

//      if(x%2===1){
//       sumOfOdd += x;
//      }else {
//       sumOfEven += x;
//      }
// }
// console.log(sumOfEven);
// console.log(sumOfOdd);

//for of loop
for (let items of nums){
      console.log(items);
}