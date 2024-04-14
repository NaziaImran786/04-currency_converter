#! /usr/bin/env node

import inqiurer from "inquirer";

let currency: { [key: string]: number } = {
  USD: 1, //Base CURRENCY
  EUR: 0.91,
  GBP: 0.76,
  INR: 74.57,
  PKR: 280,
};

let user_answer = await inqiurer.prompt([
  {
    type: "list",
    name: "from",
    message: "Currency Converting From",
    choices: ["USD", "EUR", "GBP", "INR", "PKR"],
  },

  {
    name: "to",
    message: "Currency Converting To",
    type: "list",
    choices: ["USD", "EUR", "GBP", "INR", "PKR"],
  },
  {
    name: "amount",
    message: "Enter Your Amount",
    type: "number",
  },
]);

console.log(
  (currency[user_answer.to] / currency[user_answer.from]) * user_answer.amount
);






// let fromAmount = currency[user_answer.from] // exchange rate
// let toAmount = currency[user_answer.to] // exchange rate
// let amount = user_answer.amount
// let baseAmount = amount / fromAmount // USA base currency // 4
// let convertedAmount = baseAmount * toAmount
// console.log(convertedAmount);

// let userfromcurrency = user_answer.from

// console.log(fromAmount);
// console.log(toAmount);
// console.log(amount);
