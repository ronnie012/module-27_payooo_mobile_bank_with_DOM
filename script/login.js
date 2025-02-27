// console.log("Hero Alam");
document.getElementById("login-btn").addEventListener("click", function (event) {
  event.preventDefault();
  const accountNumber = document.getElementById("Account-number").value;
  const pinNumber = document.getElementById("Pin").value;
  const convertedPin = parseInt(pinNumber);
  if (accountNumber.length===11) {
    if (convertedPin===1234) {
      window.location.href="./main.html"
    }
    else {
      alert("Wrong PIN, Enter Correct PIN!");
    }
  }
  else {
    alert("Enter Valid Account Number")
  }
})