// Store the wallet amount to your local storage with key "amount"
let purse=document.getElementById("wallet");
purse.innerText=JSON.parse(localStorage.getItem("amount"))||0
function addingMoney(){
  
    let wallet=document.getElementById("amount").value;
 
    localStorage.setItem("amount",JSON.stringify(wallet));
   
    purse.innerText=JSON.parse(localStorage.getItem("amount"))||0
    
}