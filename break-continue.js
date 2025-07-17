const nums = [12,22,32,34,43,54,76,99];
// for (let mehedy of nums){
//       console.log(mehedy);
//       if (mehedy === 54){
//             break;
//       }
// }

for (let item of nums){
if(item % 2 === 0){
      continue;
      }
      console.log(item);
}