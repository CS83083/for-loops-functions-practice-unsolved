// EXERCISE 12
// Return an array of all deposits greater than 100
// Array example: bankAccounts in /data/data.js
// getAllDepositsGreaterThanOneHundred(bankAccounts) => [3432, 43242.34, 23432]

export function getAllDepositsGreaterThanOneHundred(array) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i].deposits && array[i].deposits.length > 0) {
      for (let j = 0; j < array[i].deposits.length; j++) {
        if (array[i].deposits[j] > 100) {
          result.push(array[i].deposits[j]);
        }
      }
    }
  }
  return result;
}

// export function getAllDepositsGreaterThanOneHundred(array) {
//   return array.flatMap((account) => {
//     if (account.deposits && account.deposits.length > 0) {
//       return account.deposits.filter((deposit) => deposit > 100);
//     }
//     return [];
//   });
// }

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-12"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
