// let userName = prompt("Please enter your name:");

// switch (userName) {
//     case "Abel":
//         confirmation = `You are my friend, ${userName}.`;
//         break;
//     case "Noah":
//         confirmation = `You are my friend, ${userName}`;
//         break;
//     case "Cain":
//         confirmation = `You are my friend, ${userName}`;
//     default:
//         confirmation = `No, ${userName}, I don't know you.`;
//         break;
// }

// console.log(confirmation);

let gameArray = [
    "Rock",
    "Paper",
    "Scissors"
];

let player = Math.floor(Math.random()*3);
let computer = Math.floor(Math.random()*3);

let message;

if (player === computer) {
    message = "It's a tie.";
} else if (player > computer) {
    message = "The player won.";
} else {
    message = "The computer won";
}

message = `Player selection is ${gameArray[player]}, computer selection is ${gameArray[computer]}.`;

console.log(message);

