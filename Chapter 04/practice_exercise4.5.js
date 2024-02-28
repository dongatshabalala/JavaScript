let prize = prompt("Give me a number between 0 and 10");

let prizeNumber = Number(prize);

let output = "My selection: ";

switch (prizeNumber) {
    case 0:
        output = output + "bag of tea";
        break;
    case 1:
        output = output + "rusks";
        break;
    case 2:
        output = output + "cheese";
        break;
    case 3:
        output = output + "cake";
        break;
    case 4:
        output = output + "paper";
        break;
    case 5:
        output = output + "carrot";
        break;
    case 6:
        output = output + "banana";
        break;
    case 7:
        output = output + "chutney";
        break;
    case 8:
        output = output + "toothpaste";
        break;
    case 9:
        output = output + "soap";
        break;
    case 10:
        output = output + "cereal";
        break;
    default:
        output = output + "you got nothing";
}

console.log(output);

