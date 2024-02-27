// MILES-TO-KILOMETERS CONVERTER

let mileValue = prompt("Please insert a value in miles.");

let kiloValue = mileValue*1.60934;

console.log(`The distance of ${kiloValue} kms is equal to ${mileValue} miles.`);

// BMI CALCULATOR

let inchHeight = prompt("Please insert a height in inches.");

let poundWeight = prompt("Please insert a weight in pounds.");

let centiHeight = inchHeight*2.54;

let kiloWeight = poundWeight*2.2046;

bmIndex = kiloWeight/(centiHeight**2);

console.log(bmIndex);


