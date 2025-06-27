// EXERCISE 8
// Return an array with a bank account object with the greatest balance value
// Array example: bankAccounts in /data/data.js
// getClientWithGreatestBalance(bankAccounts) => [{ name: 'SomeName', balance: 32, ... }]

export function getClientWithGreatestBalance(array) {
  const maxBalance = Math.max(...array.map((account) => account.balance));
  return array.filter((account) => account.balance === maxBalance);
}

// getClientWithGreatestBalance = (array) => {
//   const maxBalance = Math.max(...array.map((account) => account.balance));
//   console.log(maxBalance);
//   const jimbo = array.filter((account) => account.balance === maxBalance);
//   return jimbo
// };

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-8"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
