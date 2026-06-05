let product = "";
let amount = 0;
let qty = 1;

function selectProduct(num) {
    qty = 0;
    document.getElementById("qty").innerHTML = qty;

    if(num == 1) {
        product = "Umbrella";
        amount = 120;
    }
    else if(num == 2) {
        product = "Raincoat";
        amount = 250;
    }

    document.getElementById("status").innerHTML = product + " Selected";
    document.getElementById("total").innerHTML = "₹" + amount;
}

function changeQty(num) {
    if(qty == 0 && num == -1) {
        return;
    }

    qty += num;
    document.getElementById("qty").innerHTML = qty;

    let total = amount * qty;
    document.getElementById("total").innerHTML = qty + " Items = ₹" + total;
}

function payQR() {
    let total = amount * qty;
    document.getElementById("status").innerHTML = "Scan QR to Pay ₹" + total;
    document.getElementById("qrImage").src =
        "https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=Pay" + total;
}

function qrSuccess() {
    document.getElementById("status").innerHTML = "✅ QR Payment Successful";
    document.getElementById("dispenseBtn").disabled = false;
}

function showCard() {
    document.getElementById("status").innerHTML = "Enter Card Details";
}

function cardPay() {
    let card = document.getElementById("card").value;
    let expiry = document.getElementById("expiry").value;
    let cvv = document.getElementById("cvv").value;

    if(card.length != 16) {
        document.getElementById("status").innerHTML = "❌ Invalid Card Number";
        return;
    }

    if(!expiry.includes("/")) {
        document.getElementById("status").innerHTML = "❌ Use MM/YY Format";
        return;
    }

    if(cvv.length != 3) {
        document.getElementById("status").innerHTML = "❌ Invalid CVV";
        return;
    }

    document.getElementById("status").innerHTML = "✅ Card Payment Successful";
    document.getElementById("dispenseBtn").disabled = false;
}

function dispense() {
    let time = 5;
    let status = document.getElementById("status");

    let timer = setInterval(() => {
        status.innerHTML = "Dispensing in " + time;
        time--;

        if(time < 0) {
            clearInterval(timer);
            status.innerHTML = "🎉 Thank You! Take your " + product;
            document.getElementById("dispenseBtn").disabled = true;
        }
    }, 1000);
}
