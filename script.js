let myAccountBalance = parseInt(document.getElementById("myAccountBalance").innerText);


function sendMoney(){
    var enterName= document.getElementById("enterName").value;
    var enterAmount = parseInt(document.getElementById("enterAmount").value);
    
    if (enterAmount > 8000) {
        alert("Insufficient Balance");
    }
    else{
        alert("Transaction Successful!");
    }
    

}

