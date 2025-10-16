export let cart;

loadFromStorage();

function saveToStorage(){
    localStorage.setItem('cart', JSON.stringify(cart));
}

export function loadFromStorage(){
    cart = JSON.parse(localStorage.getItem('cart'));

    if(!cart){
        cart = [];
    }
}

export function addToCart(productId, quantity){
    let matchingItem;
    //Check to see if the item is already in the cart
    cart.forEach((cartItem)=>{
        if(productId.toString() === cartItem.productId){
            matchingItem = cartItem
            cartItem.quantity += quantity;
        }
    })

    if(!matchingItem){
        cart.push({
            productId,
            quantity: 1,
        })
    }

    saveToStorage();
}