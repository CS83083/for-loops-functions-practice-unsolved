// EXERCISE 10
// Return an array of account holders names that contains a given letter
// Array example: bankAccounts in /data/data.js
// getClientsWithLetterInName(bankAccounts, 'e') => ['Kevin', 'Steven', ...]

export function getClientsWithLetterInName(array, letter) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i].name.toLowerCase().includes(letter.toLowerCase())) {
      result.push(array[i].name);
    }
  }

  return result;
}

// export function getClientsWithLetterInName(array, letter) {
//   return array
//     .filter((account) =>
//       account.name.toLowerCase().includes(letter.toLowerCase())
//     )
//     .map((account) => account.name);
// }

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-10"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
