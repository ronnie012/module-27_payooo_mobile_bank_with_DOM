document.getElementById("add-money").addEventListener("click", function (event) {
    event.preventDefault();

    const pinNumber = document.getElementById("Pin").value;
    const convertedPin = parseInt(pinNumber);

    const amount = document.getElementById("amount").value;
    const convertedAmount = parseFloat(amount);

    const mainBalance = document.getElementById("main-balance").innerText;
    const convertedMainBalance = parseFloat(mainBalance)

    if (amount>0 && pinNumber) {
      if (convertedPin===1234) {
        const sum = convertedMainBalance + convertedAmount;
        document.getElementById("main-balance").innerText = sum;
      }
      else {
        alert("Wrong Pin, Enter Correct PIN.")
      }
    }
    else {
      alert("Enter Valid Amount Greater than 10 Dollars.")
    }
})