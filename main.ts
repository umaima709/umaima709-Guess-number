import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random() * 6 + 1);

const input = await inquirer.prompt([{
    name: " userNum",
    type: "number",
    message: "Guess a number from 1 to 6",
}]);
if (input.userNum === randomNumber) {
    console.log("congratulation you guess correct number its " + randomNumber);

}
else {
    console.log("You guess wrong number try again!");

}