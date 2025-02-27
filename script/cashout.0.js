document.getElementById("cashout-btn").addEventListener("click", function (event) {
  event.preventDefault();
  const pinNumber = document.getElementById("cashout-pin").value;
  const convertedPin = parseInt(pinNumber);

  const amount = document.getElementById("cashout-amount").value;
  const convertedAmount = parseFloat(amount);

  const mainBalance = document.getElementById("main-balance").innerText;
  const convertedMainBalance = parseFloat(mainBalance);

  if (amount > 0 && amount <= 4500 && pinNumber) {
    if (convertedPin === 1234) {
      const sum = convertedMainBalance - convertedAmount;
        document.getElementById("main-balance").innerText = sum;
    }
    else {
      alert("Enter valid PIN.")
    }
  }
  else {
    alert("Enter Valid Amount greater than 0 and less than or equal to 4500")
  }
})