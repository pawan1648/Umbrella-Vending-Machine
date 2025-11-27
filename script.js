let paid = false;

function pay(method) {
    const status = document.getElementById("status");
    status.textContent = "Processing " + method + " payment...";

    setTimeout(() => {
        paid = true;
        status.textContent = "Payment successful ✔";
        document.getElementById("dispenseBtn").disabled = false;
    }, 1500);
}

function dispense() {
    if (!paid) return;

    const status = document.getElementById("status");
    status.textContent = "Dispensing umbrella... ☔";

    setTimeout(() => {
        status.textContent = "Please take your umbrella. Thank you!";
        document.getElementById("dispenseBtn").disabled = true;
        paid = false;
    }, 2000);
}
