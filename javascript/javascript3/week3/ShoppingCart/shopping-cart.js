class Product {
    constructor(name, price) {
            this.name = name;
            this.price = price;
        }
        // method to convert currency
    convertToCurrency(currency) {
        if (currency === "DKK") return this.price;
        if (currency === "GBP") return this.price / 8;
        if (currency === "EUR") return this.price / 7.5;
    }
}
class ShoppingCart {
    constructor() {
            this.products = [];
        }
        // Part 1
        // Implemment functionalities below
    addProduct(product) {
        this.products.push(product);
        return this.products;
    }
    removeProduct(product) {
        const index = this.products.indexOf(product);
        this.products.splice(index, 1);
        return this.products;
    }
    searchProduct(productName) {
        return this.products.filter((product) => product.name == productName);
    }
    getTotal() {
        let totalPrice = 0;
        this.products.forEach((product) => {
            totalPrice += product.price;
        });
        return totalPrice;
    }
    renderProducts() {
        const body = document.querySelector("body");
        const h3 = document.createElement("h3");
        const totalCost = this.getTotal();
        h3.innerHTML = `Total price: ${totalCost} DKK`; // Stuck to alter currency
        body.appendChild(h3);
        const ul = document.createElement("ul");
        this.products.forEach((product) => {
            const li = document.createElement("li");
            // To alter the currency of individual product from the defualt DKK to either GBP or EUR
            li.innerText = `${product.name} :  ${product.convertToCurrency("DKK")}`; // Gives in EUR
            ul.appendChild(li);
            body.appendChild(ul);
        });
    }
    getUser() {
        let randNumber = Math.floor(Math.random() * 10) + 1;
        fetch(`https://jsonplaceholder.typicode.com/users/${randNumber}`)
            .then((response) => response.json())
            .then((usersData) => {
                console.log(usersData.name);
                const body = document.querySelector("body");
                const h3 = document.createElement("h3");
                body.appendChild(h3);
                h3.innerHTML = `User Name:  ${usersData.name}`;
            });
    }
}
// Shopping cart intance
const shoppingCart = new ShoppingCart();

// Product instances
const flatscreen = new Product("flat-screen", 500);
const mobile = new Product("mobile", 150);
const pc = new Product("pc", 250);
const car = new Product("car", 7000);

// Part 2
// Adding products
shoppingCart.addProduct(flatscreen);
shoppingCart.addProduct(flatscreen);
shoppingCart.addProduct(mobile);
shoppingCart.addProduct(pc);
shoppingCart.addProduct(car);

//Removing a product from product list

// shoppingCart.removeProduct(flatscreen);
// shoppingCart.removeProduct(mobile);
// shoppingCart.removeProduct(pc);
// shoppingCart.removeProduct(car);

console.log(shoppingCart.products);

//Find total price
console.log(shoppingCart.getTotal());

//Searching a product from added products list
console.log(shoppingCart.searchProduct("flat-screen"));
console.log(shoppingCart.searchProduct("mobile"));
console.log(shoppingCart.searchProduct("pc"));
console.log(shoppingCart.searchProduct("car"));

//Rendering product name and its price and user
shoppingCart.renderProducts();

//Gettin a  user
shoppingCart.getUser();

// Part 3

// Assuming dkr as default currency
const plant = new Product("plant", 50);
console.log(plant.convertToCurrency("EUR"));
console.log(plant.convertToCurrency("GBP"));
console.log(plant.convertToCurrency("DKK"));

// Part 4, optional