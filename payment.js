document.getElementById("paymentForm").addEventListener("submit", async e => {
    e.preventDefault();

    const payment = {
        name: document.getElementById("name").value,
        address: document.getElementById("address").value,
        email: document.getElementById("email").value,
        cardType: document.getElementById("cardType").value,
        cardNumber: document.getElementById("cardNumber").value,
        expirationDate: document.getElementById("expirationDate").value,
        pincode: document.getElementById("pincode").value,
    };

    const res = await fetch("/api/payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payment),
    });

    if (res.ok) {
        alert("Payment successful!");
        window.location.href = "index.html";
    } else {
        alert("Payment failed.");
    }
});
