// EXERCISE 13
// Return an array of bank accounts that have a sum of deposits less than 2000 or no deposits at all
// Array example: bankAccounts in /data/data.js
// getAllAccountsWithSumsOfDepositsLess2000(bankAccounts) => [
// Susan's Account Object,
// Morgan's Account Object
// Joshua's Account Object
// Candy's Account Object,
// Phil's Account Object
// ]

export const getAllAccountsWithSumsOfDepositsLess2000 = (array) => {
  return array.filter((account) => {
    const sumOfDeposits = account.deposits
      ? account.deposits.reduce((sum, deposit) => sum + deposit, 0)
      : 0;
    return sumOfDeposits < 2000;
  });
};

// getAllAccountsWithSumsOfDepositsLess2000 = (array) => {
//   return array.filter((account) => {
//     if (!account.deposits) {
//       console.log("No deposits found, sum = 0");
//       return 0 < 2000; // Return true since 0 < 2000
//     }
//     const sumOfDeposits = account.deposits.reduce((sum, deposit) => {
//     console.log(`this is a sum ${sum} and this is a deposit? ${deposit} and sum plus deposit? ${sum + deposit}`);
//     return sum + deposit; // ADD THIS RETURN!
//     }, 0);
//     return sumOfDeposits < 2000; // Return true if sum of deposits is less than 2000
//   });
// };

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-13"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
