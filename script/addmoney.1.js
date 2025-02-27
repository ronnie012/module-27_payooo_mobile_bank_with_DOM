document
  .getElementById("add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();
      const amount = getInputValueByID("amount");
      const pinNumber = getInputValueByID("Pin");
      const account = document.getElementById("Account-number").value;
      const mainBalance = getInnerTextByID("main-balance");
      console.log(mainBalance);
      const selectedBank = document.getElementById("allbank").value;
      console.log(selectedBank)

      if (selectedBank==="Select MFS") {
        alert("Please Select an MFS.")
        return;
      }
      if (amount<0) {
        alert("Enter amount greater than 0.")
        return;
      }

      if (account.length===11) {
        if (pinNumber===1234) {
          const sum = mainBalance + amount;
          // document.getElementById("main-balance").innerText = sum;
          setInnerTextByIdAndValue("main-balance", sum)

          const container = document.getElementById("transaction-container");

          const div = document.createElement("div");
          div.classList.add("bg-red-400")
          div.innerHTML = `
          <h1 class="text-green-400">Credited $${amount} from ${selectedBank} account number: ${account}.</h1>
          <h3>
          `
          container.appendChild(div)
          // div.preventDefault();
          /*
          const p = document.createElement("p");
          p.innerText=`Your Account was Credited by \$${amount} from ${account};`
          console.log(p)
          container.appendChild(p);
          */
        }
        else {
          alert("Wrong Pin, Enter Correct PIN.")
        }
      }
      else {
        alert("Enter Valid 11-digit Acount Number.")
      }


});