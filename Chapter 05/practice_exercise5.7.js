let object = {
    item1: 1,
    item2: 2,
    item3: 3
};

for (let prop in object) {
    console.log(prop, object[prop]);
}

let array = [
    "item1",
    "item2",
    "item3"
];

for (let i = 0; i < array.length; i++) {
    console.log(i, array[i]);
}
