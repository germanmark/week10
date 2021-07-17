// This is the starting state of our shopping cart, we will be pushing items into it
var shoppingCart = [];

/**
 * This function will make the buttons of a clicked div "appear"
 * @param {Element} element the clicked div
 */
function appear(element){
    var buttons = element.querySelectorAll('button');
    for(var i=0; i<buttons.length; i++){
        buttons[i].classList.toggle('revealedButton');
    }
}

/**
 * This function will add a shopping item to the cart when the appropriate button is clicked
 * @param {Element} element the clicked button
 */
function addCartItem(element){
    var parent = element.parentElement;
    var imgSrc =  parent.querySelector('img').getAttribute('src');
    var heading =  parent.querySelector('h2').innerText;
    var description =  parent.querySelector('p').innerText;
    var info = {
        imgLink : imgSrc,
        name : heading,
        desc : description
    }
    shoppingCart.push(info);
    console.log(shoppingCart);
    updateCart();
}

/**
 * This function updates the shopping cart, i.e. sets the cookies for the state of the cart
 */
function updateCart(){
    Cookies.set("cart", shoppingCart);
}