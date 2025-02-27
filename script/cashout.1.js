document
  .getElementById("cashout-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const accountNumber = document.getElementById("Account-number").value;
    const amount = getInputValueByID("cashout-amount");
    const pinNumber = getInputValueByID("cashout-pin");
    const mainBalance = getInnerTextByID("main-balance");
    console.log(amount)

    if (amount>mainBalance) {
      alert("Enter amount less than or equal to balance.")
      return;
    }

    if (accountNumber.length===11) {
      if (pinNumber===1234) {
        const sum = mainBalance - amount;
        setInnerTextByIdAndValue("main-balance", sum);

        const p = document.createElement("p");
        p.innerText=`Your Account was Debited by \$${amount} to ${accountNumber};`
        console.log(p)

        const container = document.getElementById("transaction-container");
        container.appendChild(p);
      }
      else {
        ("Enter valid PIN.")
      }
    }
    else {
      alert("Enter Valid Amount greater than 0 and less than or equal to 4500")
    }


})
