// Personal finance Tracker application outline 

//1. Create an array to store transactions
//2. Create a function to add a transaction
//3. Create a function to calculate the balance 
//4. Create a function to print a summary
//5. Use if-else statements to handle different transaction types 
//6. Print the results to the console. 


//1.  Array to store transactions 
let transactions = [];

// 2. Function to add a transaction 

function addTransaction( type, amount) { 
    //Condition for type of transaction that can be entered in a transaction 
    if ( type !== 'income' && type !== 'expense')
        {
            console.log("Invalid transaction type. Use 'income' or 'expense'.")
            return;
        }
       
        //Condition for minimum amount that can be entered in a transaction 
        if (amount <= 0) {
            console.log("Amount Should be greater than zero.");
            return;
        }

        transactions.push({type, amount});
        console.log (`Added ${type}: $${amount}`);
}

//3. Function to calculate balance
function calculateBalance () {
    let income = 0;
    let expenses = 0;

    for (let transaction of transactions ) {
        if (transaction.type === 'income') {
            income += transaction.amount ;
        }
        else if (transaction.type === 'expense')
            {expenses += transaction.amount;
            }
    }
    return income - expenses; 
}

//4. function to print a summary 
function printSummary() {
    console.log ("Transaction summary.");
    for (let transaction of transactions) {
        console.log(`${transaction.type}: $$ {transaction.amount}`);
    }

    const balance = calculateBalance ();
    console.log (`Current Balance: $${balance}`);
}

//5. Main function to run the app (The real deal)
function runFinanceApp () {
    addTransaction ('income', 10000);   // Example income entry
    addTransaction ('expense', 2500); // Example of expense entry
    printSummary();
}


//6. Call the main functions to run the app 
runFinanceApp();
