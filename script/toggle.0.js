document.getElementById("cashout").style.display = "none";

document.getElementById("add-money-box").addEventListener("click", function () {
  document.getElementById("cashout").style.display = "none";
  document.getElementById("addmoney").style.display = "block";
})
document.getElementById("cash-out-box").addEventListener("click", function () {
  document.getElementById("cashout").style.display = "block";
  document.getElementById("addmoney").style.display = "none";
})