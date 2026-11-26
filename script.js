let cart = [];

// Function to add product to cart
function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    updateCartUI();
}

// Bonus: Function to remove product from cart
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartUI();
}

// Update cart count, item list, and total price
function updateCartUI() {
    const cartCountElement = document.getElementById('cart-count');
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');

    // Update top navbar cart count
    cartCountElement.innerText = cart.length;

    // Clear current cart display
    cartItemsContainer.innerHTML = '';

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="empty-msg">Your cart is currently empty.</p>';
        totalPriceElement.innerText = '0';
        return;
    }

    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;

        const itemDiv = document.createElement('div');
        itemDiv.classList.add('cart-item');
        itemDiv.innerHTML = `
            <span><strong>${item.name}</strong> - ₹${item.price}</span>
            <button class="remove-btn" onclick="removeFromCart(${index})">Remove</button>
        `;
        cartItemsContainer.appendChild(itemDiv);
    });

    // Update total price
    totalPriceElement.innerText = total;
}

// Bonus: Search bar functionality
function searchProducts() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const products = document.querySelectorAll('.product-card');

    products.forEach(card => {
        const productName = card.getAttribute('data-name').toLowerCase();
        if (productName.includes(query)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}