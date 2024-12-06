document.addEventListener('DOMContentLoaded', async () => {
    const cartItemsContainer = document.getElementById('cartItems');
    const totalPriceElement = document.getElementById('totalPrice');
    const checkoutButton = document.getElementById('checkoutButton');

    try {
        const response = await fetch('/cart-items');
        const items = await response.json();

        let totalPrice = 0;
        items.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.ItemName}</td>
                <td>${item.Price.toFixed(2)}</td>
                <td>${item.Quantity}</td>
            `;
            cartItemsContainer.appendChild(row);
            totalPrice += item.Price * item.Quantity;
        });

        totalPriceElement.textContent = totalPrice.toFixed(2);

        checkoutButton.addEventListener('click', () => {
            window.location.href = 'payment.html';
        });
    } catch (err) {
        console.error('Error loading cart items:', err);
    }
});
