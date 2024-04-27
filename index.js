#! /usr/bin/env node
import inquirer from "inquirer";
const currency = {
    USD: 1,
    PKR: 280,
    EUR: 0.9,
    GBP: 0.76,
    JYP: 113,
    AUD: 1.65,
    CAD: 1.3,
    INR: 74.76, //Indian Rupees
};
let userAnswer = await inquirer.prompt([
    {
        name: "from",
        message: "Enter From Currency",
        type: "list",
        choices: ["USD", "PKR", "EUR", "GBP", "JYP", "AUD", "CAD", "INR"],
    },
    {
        name: "to",
        message: "Enter To Currency",
        type: "list",
        choices: ["USD", "PKR", "EUR", "GBP", "JYP", "AUD", "CAD", "INR"],
    },
    { name: "amount",
        message: "Enter Your Amount",
        type: "number"
    }
]);
//formulas for currency conversion
let fromAmount = currency[userAnswer.from];
let toAmount = currency[userAnswer.to];
let amount = userAnswer.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);
