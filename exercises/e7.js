// EXERCISE 7
// Return an array with a bank account object with the lowest balance but not broke ( balance > 0 )
// In case there is no account that has balance > 0 return an empty array
// Array example: bankAccounts in /data/data.js
// getClientWithLeastBalance(bankAccounts) => [{ name: 'SomeName', balance: 32, ... }]


export const getClientWithLeastPositiveBalance = (array) => {
 const positiveBalances = [];
 let minBalance = Infinity;
 
 // First loop: find accounts with positive balance and track minimum
 for (let i = 0; i < array.length; i++) {
   if (array[i].balance > 0) {
     positiveBalances.push(array[i]);
     if (array[i].balance < minBalance) {
       minBalance = array[i].balance;
     }
   }
 }
 
 // If no positive balances found, return empty array
 if (positiveBalances.length === 0) return [];
 
 // Second loop: find all accounts with the minimum balance
 const result = [];
 for (let i = 0; i < positiveBalances.length; i++) {
   if (positiveBalances[i].balance === minBalance) {
     result.push(positiveBalances[i]);
   }
 }
 
 return result;
};


// export const getClientWithLeastPositiveBalance = (array) => {
//   const positiveBalances = array.filter((account) => account.balance > 0);
//   if (positiveBalances.length === 0) return [];

//   const minBalance = Math.min(
//     ...positiveBalances.map((account) => account.balance)
//   );
//   return positiveBalances.filter((account) => account.balance === minBalance);
// };

// getClientWithLeastPositiveBalance = (array) => {
//   const positiveBalances = array.filter((account) => account.balance > 0);
//   positiveBalances.forEach((account) => console.log(account));

//   if (positiveBalances.length === 0) return [];
// };

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-7"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
