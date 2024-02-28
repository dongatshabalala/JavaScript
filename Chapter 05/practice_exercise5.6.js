let myArray = [];

for (let i = 0; i < 10; i++) {
    myArray.push(i + 1);
}
console.log(myArray);
 
for (let j = 0; j < myArray.length; j++) {
    console.log(myArray[j]);
}
for (let val of myArray) {
    console.log(val);
}

