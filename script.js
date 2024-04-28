// This is the boilerplate code given for you
// You can modify this code
// Product data
function test(){
	console.log("test", sessionStorage.getItem('sessionCart'))
	console.log("test2", sessionStorage.getItem('sessionCart')?.split(','))
}
const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
  { id: 4, name: "Product 4", price: 40 },
  { id: 5, name: "Product 5", price: 50 },
];
// sessionStorage.removeItem('sessionCart')


// DOM elements
const productList = document.getElementById("product-list");
const cartList = document.getElementById("cart-list");
let cartIdList =  sessionStorage.getItem('sessionCart')?.split(',') || [];
// cartIdList =JSON.parse(sessionStorage.getItem('sessionCart'))
// Render product list
function renderProducts() {
  products.forEach((product) => {
    const li = document.createElement("li");
    li.innerHTML = `${product.name} - $${product.price} <button class="add-to-cart-btn" data-id="${product.id}" onclick="addToCart(${product.id})">Add to Cart</button>`;
    productList.appendChild(li);
  });
}

// Render cart list
function renderCart() {
	 cartList.innerHTML = ""
	cartIdList.forEach((productId) => {
		const index = productId;
		// console.log("index",index)
		const product = products[productId-1]
	    const li = document.createElement("li");
	    li.innerHTML = `${product?.name} - $${product?.price}`;
	    cartList.appendChild(li);
  });
}

// Add item to cart
function addToCart(productId) {
	cartIdList.push(productId)
	sessionStorage.setItem('sessionCart', cartIdList)
	// console.log(sessionStorage.getItem('sessionCart'))
	renderCart()
}

// Remove item from cart
function removeFromCart(productId) {
	// cardIdList.
}

// Clear cart
function clearCart() {
	sessionStorage.removeItem('sessionCart')
	cartIdList = []
	renderCart()
}

// Initial render
renderProducts();
renderCart();
