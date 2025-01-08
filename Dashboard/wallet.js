document.addEventListener("DOMContentLoaded", () => {
  const balanceElement = document.getElementById("balance");
  const transactionHistoryElement = document.getElementById("transactionHistory");
  let balance = 0;

  // Function to update balance
  function updateBalance() {
    balanceElement.textContent = `Balance: $${balance.toFixed(2)}`;
  }

  // Function to add a transaction
  function addTransaction(type, amount) {
    const transaction = document.createElement("li");
    transaction.textContent = `${type}: $${amount.toFixed(2)}`;
    transaction.className = type.toLowerCase();
    transactionHistoryElement.appendChild(transaction);

    // Remove "No transactions yet" message
    if (transactionHistoryElement.children[0].textContent === "No transactions yet.") {
      transactionHistoryElement.removeChild(transactionHistoryElement.children[0]);
    }
  }

  // Add Money
  document.getElementById("addMoney").addEventListener("click", () => {
    const amount = parseFloat(prompt("Enter amount to add:"));
    if (!isNaN(amount) && amount > 0) {
      balance += amount;
      updateBalance();
      addTransaction("Deposit", amount);
    } else {
      alert("Invalid amount!");
    }
  });

  // Withdraw Money
  document.getElementById("withdrawMoney").addEventListener("click", () => {
    const amount = parseFloat(prompt("Enter amount to withdraw:"));
    if (!isNaN(amount) && amount > 0 && amount <= balance) {
      balance -= amount;
      updateBalance();
      addTransaction("Withdrawal", amount);
    } else if (amount > balance) {
      alert("Insufficient balance!");
    } else {
      alert("Invalid amount!");
    }
  });

  // Initialize balance
  updateBalance();
});
