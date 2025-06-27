// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export const getClientsWithWrongBalance = (array) => {
  return array.filter((account) => {
    const totalDeposits = account.deposits
      ? account.deposits.reduce((sum, deposit) => sum + deposit, 0)
      : 0;
    const totalWithdrawals = account.withdrawals
      ? account.withdrawals.reduce((sum, withdrawal) => sum + withdrawal, 0)
      : 0;
    return account.balance !== totalDeposits - totalWithdrawals;
  });
};

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
