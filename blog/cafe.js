// -- JAVASCRIPT TCG! -- //
let products ={
    // creating products objects with sotck and pice attached to each
    coolNewPack: {
        stock: 2,   
        price : 15.00

    },
 
    dustyDuels: {
        stock: 12,
        price: 8.00
    },

    evilPack: {
        stock: 5,
        price: 10.00
    },

    DustyDuelsUltraBox: {
        stock: 4,
        price: 100.99
    },

    coolNewUltraBox: {
        stock: 0.5,
        price: 999.98
    }

}
// display names of products
function displayProducts (){

    document.getElementById("coolNewPack").innerHTML = "Crazy Rainbow Awesome Pack:" + products.coolNewPack.stock
    document.getElementById("coolNewUltraBox").innerHTML = "Ultra Crazy Rainbow Awesome Collectors Pack Box:" + products.coolNewUltraBox.stock
    document.getElementById("evilPack").innerHTML = "Evil Pack:" + products.evilPack.stock
     document.getElementById("dustyDuels").innerHTML = "Dusty Duel:" + products.dustyDuels.stock
     document.getElementById("DustyDuelsUltraBox").innerHTML = "Dusty Duel ULRA BOX:" + products.DustyDuelsUltraBox.stock
}

displayProducts ()

// -- Customer section -- //

let customer = {
    order: []
}
 //random 1-5
let minOrderSize = 1
let maxOrderSize = 5

document.getElementById("customerOrder").style.maxWidth = "60%"; 

function generateCustomerOrder () {
   
let orderSize = getRandomInt(minOrderSize, maxOrderSize)

let newOrder =[]

let productNames = Object.keys(products)

// loop for random names in order
for(let i = 0; i <= orderSize; i++) {
    let productIndex = getRandomInt(0, productNames.length - 1)
    let productName = productNames[productIndex]
    newOrder.push(productName)
}

//creating order

customer.order = newOrder
displayCustomerOrder ()

}
//rending cusomter order on page
function displayCustomerOrder () {
    document.getElementById("customerOrder").innerHTML ="Customer Order:" + customer.order

}

document.getElementById("customerButton").onclick = generateCustomerOrder 

// Cash 

let cash = 0

function displayCash () {
document.getElementById("cash").innerHTML = "Shillings:" + cash
}

displayCash ()

// order functionality, checking product and total sale value
function fillOrder() {
    let saleTotal = 0;
    //for loop that says if we ahve is it substracts from stock and adds to sale total. If not then displays message
    for (let i=0; i <customer.order.length; i++) {
    
        let productName = customer.order[i]

        if (products[productName].stock > 0) {

            products[productName].stock--
            saleTotal += products[productName].price

        } else {
            alert("We're sorry, scalpers have stolen all the " + productName)
        }
    } 
    cash += saleTotal
    customer.order = []

    displayProducts()
    displayCash()
    displayCustomerOrder()
}

document.getElementById("fillOrder").onclick = fillOrder

 console.log(getRandomInt(0, 5))
//util
function getRandomInt (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random()* (max - min + 1)) + min;
}