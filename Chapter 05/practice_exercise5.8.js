let outPut = "";

let skipVariable = 5;

for (let i = 0; i < 10; i++) {
    if (i === skipVariable) {
        continue;
    }
    outPut = outPut + i;
}
console.log(outPut);
