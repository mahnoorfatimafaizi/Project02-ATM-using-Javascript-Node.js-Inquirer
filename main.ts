import inquirer from "inquirer";

let currentBalance = 25000;
let myPin = 28324;

let pinAsnwer = await inquirer.prompt([
  {
    name: "pin",
    message: "Enter 5-digit Pin Code",
    type: "number",
  },
]);
if (pinAsnwer.pin === myPin){
    console.log("Correct Pin Code!");

    let operationAns = await inquirer.prompt(
        [
            {
                name: "operation",
                message: "Please Select An Option ",
                type: "list",
                choices: ["Withdraw", "Fast Cash", "Balance Check"]
            }
        ]
    );

    if (operationAns.operation === "Withdraw"){
        let amountAns = await inquirer.prompt(
            [
                {
                    name: "amount",
                    message: "Enter Your Amount",
                    type: "number"
                }
            ]
        );
        if (amountAns.amount > currentBalance){
            console.log("Insufficient Fund")
        }else if (amountAns.amount == currentBalance){
            console.log("Your Remaining Balance Is: " + 0)
        }else if (currentBalance -= amountAns.amount) {
            console.log("Your Remainig Balance Is: " + `${currentBalance}`)
        }

        }else if (operationAns.operation === "Fast Cash"){
            let fastCash = await inquirer.prompt(
                [
                    {
                        name:"amount",
                        message: "Select The Amount",
                        type: "list",
                        choices: [5000, 10000, 20000, 30000, 50000],
                    }
                ]
            ); if (fastCash.amount > currentBalance){
                console.log("Insufficient Fund")
            }else if (fastCash.amount == currentBalance){
                console.log("Your Remaining Balance Is: " + 0)
            }else if (currentBalance -= fastCash.amount) {
                console.log("Your Remainig Balance Is: " + `${currentBalance}`)
            };
            
        }else if (operationAns.operation === "Balance Check"){
            console.log("Current Balance Is: " + `${currentBalance}`)
        }
            
 }
 
 else {
    console.log("Incorrect Pin Code. Try Again!")
 }
     
    
