// script.js

let cart = [];
let totalPrice = 0;

document.getElementById('buy-now-btn').addEventListener('click', () => {
    const product = {
        name: 'Product Name',
        price: 49.99
    };

    cart.push(product);
    totalPrice += product.price;
    updateCart();
});

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');

    cartItems.innerHTML = '';
    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(li);
    });

    totalPriceElement.textContent = totalPrice.toFixed(2);
}

document.getElementById('checkout-btn').addEventListener('click', () => {
    if (cart.length === 0) {
        alert('Your cart is empty!');
    } else {
        alert(`Thank you for your purchase! Total: $${totalPrice.toFixed(2)}`);
        cart = [];
        totalPrice = 0;
        updateCart();
    }
});
