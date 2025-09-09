let total = 0;

function addToCart(name, price) {
    let cartList = document.getElementById('cart-items');
    let listItem = document.createElement('li');
    listItem.textContent = name + " - " + price + " руб.";
    cartList.appendChild(listItem);
    
    total += price;
    document.getElementById('total').textContent = total;
}

function clearCart() {
    document.getElementById('cart-items').innerHTML = "";
    total = 0;
    document.getElementById('total').textContent = total;
}
