let DATA = [];

// to set the cart on load if their is no cart present in the local storage

// if (!window.localStorage.getItem("cart")) {
//   localStorage.setItem("cart", JSON.stringify([]));
// }

// function formatINR(number) {
//   // First, round the number to 2 decimal places
//   const roundedNumber = Math.round(number * 100) / 100;

//   // Convert the number to a string with commas for thousands separators
//   const numberWithCommas = roundedNumber
//     .toString()
//     .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

//   // Return the string with the INR symbol and 2 decimal places
//   return numberWithCommas;
// }

document.addEventListener("DOMContentLoaded", function () {
  let itemsContainer = document.querySelector(".item_containers");
  async function fetchProducts(url) {
    let data = await fetch(url);
    let response = await data.json();
    let items = response;
    DATA = items;
    console.log(DATA)
    for (let i = 0; i < items.length; i++) {
      let description = response[i].description;
      itemsContainer.innerHTML += ` <div class="items">
            <img src=${response[i].image} alt="">
            <div>
            <span>${response[i].name}&nbsp;:</span>
            <span class="product_price">&#8377 ${response[i].price} 
          </span>
            </div>
            <span style="font-weight:normal">${
              description.length > 20
                ? description.substring(0, 20).concat("...more")
                : description
            }</span>
            <div> 
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star no-checked"></span>
            <span class="fa fa-star no-checked"></span>
            </div>
            <button  onclick="addToCart(${i})" id="add-btn">Add To Cart</button>
            </div>`;
    }
  }
  fetchProducts("https://api.pujakaitem.com/api/products");
});

function cartLength(){
  var cartItems = JSON.parse(window.localStorage.getItem("products"))
    if(cartItems.length>0){
        document.querySelector('.cart_length').innerText = cartItems.length
     }
}


// function to set product array in local strorage, if it is already not present.

function setProductInLocalStrorage(){
  
  let cartItems =  JSON.parse(window.localStorage.getItem('products'))
  
  if(cartItems===  null){
    window.localStorage.setItem("products",JSON.stringify([]))
  }
}
setProductInLocalStrorage()



function addToCart(i){
  let cartProducts = JSON.parse(window.localStorage.getItem('products'))
  cartProducts.push(DATA[i])
  window.localStorage.setItem('products', JSON.stringify(cartProducts))
  cartLength()
  
}
cartLength()



