let cartCount = 0;

function addToCart(name, price) {
  cartCount++;
  document.getElementById('cart-count').textContent = cartCount;

  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));

  alert(`${name} added to cart!`);
}
