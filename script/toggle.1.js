document.getElementById("cashout").style.display = "none";
document.getElementById("transaction-history").style.display = "none";

document.getElementById("add-money-box").addEventListener("click", function () {
  handleToggle("addmoney", "block")
  handleToggle("cashout", "none")
  handleToggle("transaction-history", "none")
})

document.getElementById("cash-out-box").addEventListener("click", function () {
  handleToggle("cashout", "block")
  handleToggle("addmoney", "none")
  handleToggle("transaction-history", "none")
})

/* 
function handleToggle(id, status) {
  document.getElementById(id).style.display = status;
}
*/