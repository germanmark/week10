//Since we are getting a complex data structure, it will be represented as a JSON string
var value = Cookies.get("cart");
console.log(value);

//To translate the encoded string above to an actual object, we use the parse method
var cart = JSON.parse(value);

/**
 * This function is going to render the visual representation of data items we get from our shopping cart
 * 
 * @param {Object} item 
 */
function addShoppingCartItem(item){

    //Creating the div for the new item
    var itemRow = document.createElement('div');
    itemRow.style.borderBottom = "1px dashed grey";
    itemRow.classList.add('grid');

    //Creating the image element referenced in the cookie
    var prodImg = document.createElement('img');
    prodImg.setAttribute('src', item.imgLink);
    prodImg.style.width = "200px";
    console.log(prodImg);

    //Appending the image to the above div
    itemRow.append(prodImg);

    //Creating the heading for the item
    var prodName = document.createElement('h2');
    prodName.innerText = item.name;
    //Appending the heading to the div
    itemRow.append(prodName);

    //Creating the description element
    var prodDesc = document.createElement('p');
    prodDesc.innerText = item.desc;

    //Appending the description
    itemRow.append(prodDesc);


    //Remember, the elements that we created will not be displayed until we append them to something that is alread on the page
    //This appends the created item to the shopping cart space
    document.getElementById('shopCart').append(itemRow);
}

//This is the only thing that needs to run when the page is loaded, it will loop through the cart and add all items in it to the html
for (var i=0; i<cart.length; i++){
    addShoppingCartItem(cart[i]);
}