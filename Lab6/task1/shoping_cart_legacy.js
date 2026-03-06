var taxRate = 0.08;
var cart = [];

function addItem(name, price, qty) {
  cart.push({ name: name, price: price, qty: qty });
}

function getTotal() {
  var total = 0;

  for (var i = 0; i < cart.length; i++) {
    total += cart[i].price * cart[i].qty;
  }

  return total + total * taxRate;
}

function showCart() {
  var output = "";

  for (var i = 0; i < cart.length; i++) {
    output += cart[i].name + " x" + cart[i].qty + "<br>";
  }

  document.getElementById("cart").innerHTML = output;
}

addItem("Laptop", 1000, 1);
addItem("Mouse", 20, 2);

showCart();

console.log(getTotal());