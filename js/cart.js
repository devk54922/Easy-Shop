
function setItems(i){
    var items = JSON.parse(window.localStorage.getItem("products"))
    var cartDiv = document.getElementById("cart__items")
    console.log(items)
    cartDiv.innerHTML = ""
    items.map((item, i)=>{
        console.log(items[i].name)
        let itemsDescription = items[i].description    ;
        console.log(itemsDescription)
        var substring = itemsDescription.substring(0, 20).concat('...More');
        cartDiv.innerHTML +=`
        <div class="cartItems">
        <img src="${items[i].image}" alt="product image">
        <div> <strong>${items[i].name}</strong> <br>
        <span style="font-weight:normal">${substring}</span> <br>
        <span class="product_price">₹ ${items[i].price}</span>
        </div>
       
        
        <button class="place_orderBtn" type="button">Place Order
        </button>
        <button class="del-btn" onclick="removeItem(${i})" >Remove Item</button>
        </div>
        </div>  `
    })
    
    
}

        
        
         
setItems()

// Remove Item from cart



function removeItem(i){
    var cart = JSON.parse(window.localStorage.getItem("products"))    
    if(i!==-1){
        cart.splice(i,1)
    } 
    window.localStorage.setItem("products",JSON.stringify(cart))
    
    setItems()
    // calculateTotalPrice(cart)
        totalProductAmnt()
}
// function updateCart(){
//     var cart = JSON.parse(window.localStorage.getItem("products"))
//     console.log(cart)
//     var cartDiv = document.getElementById("cart__items")
//     cartDiv.innerHTML=" "
//     cart.map((item,i)=>{
//         cartDiv.innerHTML +=`<div class="mainCartItems">
//         <div class="cartItems">
//         <img src="${item[i].image}" alt="product image">
//             <div class="name-price">
//             <span>${item[i].name}</span>
//             <span class="product_price">${item[i].price}</span> </div>
//             </div>
//             <div>
//                 <button class="place_orderBtn" type="button">Place Order
//                 </button>
//                 <button class="del-btn" onclick="removeItem(${i})" >Remove Item</button>
//             </div>
//         </div>`
//     })
//  }

 //Total amount 

 const itemsPrice = document.querySelector('product_price')
 const priceContainer =  document.querySelector('.priceMaincontainer')
 function totalProductAmnt(){
    let totalPrice = 0
    let getProductPrice = JSON.parse(localStorage.getItem('products'))
    // console.log(getProductPrice)
    console.log('price triggred')
   for(i=0; i<getProductPrice.length; i++){
     totalPrice += getProductPrice[i].price - 4999 
     console.log(getProductPrice[i].price);
     console.log('Total price is :'+ totalPrice)
    }
    let discountAmnt = getProductPrice.length*4999
   
   getProductPrice.map((item,i)=>{
    priceContainer.innerHTML=''
    priceContainer.innerHTML=`
    <div class="cart-price-details"><h3>PRICE DETAILS</h3></div>
        <div class="price-line"></div>
        <div class="cart-items-details">
            <div class="price-cart-items"><span>Price <span>(${getProductPrice.length} item)</span> </span><span>
                &#8377 ${totalPrice}</span></div>
            <div class="price-cart-items"><span>Discount</span><span class="free">&#8377 - ${discountAmnt}</span></div>
            <div class="price-cart-items"><span>Delivery Charge</span><span class="free">Free</span></div>
            <div class="price-line"></div>
            <div class="price-cart-items"><strong>Total Amount</strong><strong>&#8377 ${totalPrice}</strong></div>
        </div>
        <div class="price-line"></div>
        <div class="cart-save-items"><strong>You will save &#8377 ${discountAmnt} on this order</strong></div>
    `
   })

 }
 totalProductAmnt()