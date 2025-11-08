// ======= Floating Product Animation Logic =======

// Select all product tiles
const products = document.querySelectorAll(".product-tile");

// Loop through each product tile to give it unique floating behavior
products.forEach((product, index) => {
  const randomDelay = Math.random() * 2; // Random start delay between 0–2s
  const randomDuration = 4 + Math.random() * 3; // Random float speed between 4–7s

  // Apply the floating animation with dynamic timing
  product.style.animation = `float ${randomDuration}s ease-in-out ${randomDelay}s infinite`;
});

// ======= Add to Cart Button Simulation =======

// Select all "Add to Cart" buttons
const cartButtons = document.querySelectorAll(".add-cart");

// Loop through each button and attach a click event
cartButtons.forEach(button => {
  button.addEventListener("click", () => {
    // When clicked, show a simple confirmation message
    alert("✅ Product added to your cart!");
  });
});