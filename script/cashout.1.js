document
  .getElementById("cash-out-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const mainBalance = getInnerTextByID("main-balance");
    // console.log(mainBalance)
    const accountNumber = document.getElementById("Account-number").value;
    const amount = getInputValueByID("cashout-amount");
    const pinNumber = getInputValueByID("cashout-pin");

    if (amount>mainBalance || amount<0 || isNaN(amount)) {
      alert("Enter only numbers greater than 0 and less than balance.")
      return;
    }

    if (accountNumber.length === 11) {
      if (pinNumber === 1234) {
        const sum = mainBalance - amount;
        setInnerTextByIdAndValue("main-balance", sum);

        const container = document.getElementById("transaction-container");

        const div = document.createElement("div");
          div.classList.add("bg-red-400")
          div.innerHTML = `
          <h1 class="text-green-400">Debited $${amount} from account number: ${accountNumber}.
          </h1>
          `
          container.appendChild(div)

        /*
        const p = document.createElement("p");
        p.innerText=`Your Account was Debited by \$${amount} to ${accountNumber};`
        console.log(p)

        container.appendChild(p);
        */
      }
      else {
        alert("Wrong Pin, Enter Correct PIN.")
      }
    }
    else {
      alert("Enter Valid 11-digit Account Number.")
    }


});
