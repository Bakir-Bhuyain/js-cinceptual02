/**Template string
 * ami cacchi j sundor kore ekta string banabo;
*/
const myPet ={
      name: 'travis',
      age: 2,
      color: 'white',
};



//My pet name is travis his age is 2 and his color is white
// ami ekta emn sentence likhte cacchi amr ei object ba ei variable use kore

//concatinate system
// const sentence = "My pet name is "+myPet.name + " . his age is "+ myPet.age + " . his color is "+myPet.color;

//template string 
const sentence = `My pet name is ${myPet.name} his age is ${myPet.age} his color is ${myPet.color}`
console.log(sentence);