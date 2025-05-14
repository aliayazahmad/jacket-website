let cartCount = 0;

// Load cart count from localStorage on page load
window.onload = () => {
  const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
  cartCount = savedCart.length;
  document.getElementById('cart-count').textContent = cartCount;
};

function addToCart(name, price) {
  cartCount++;
  document.getElementById('cart-count').textContent = cartCount;

  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));

  alert(`${name} added to cart!`);
}

function showCart() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  console.log("Cart Items:", cart);
}

// 🧹 Clear the cart
function clearCart() {
  localStorage.removeItem("cart");
  cartCount = 0;
  document.getElementById('cart-count').textContent = cartCount;
  alert("Cart cleared!");
}

