// create a class
class Grocery {
 
    name: string;
    quantity: number;
    price: number;

    constructor(n: string, q: number, p: number){
        this.name = n;
        this.quantity = q;
        this.price = p;
    }
}

// create a list
let list_of_items = [
    new Grocery("Milk", 3, 10),
    new Grocery("Bread", 6, 25),
    new Grocery("Egg", 11, 10),
    new Grocery("Flour",5, 5)
]

// access the html element with app id
const ele = document.getElementById("app");

// create a <p> element for each item in list and append it to the html page
list_of_items.forEach(e => {
    const p = document.createElement("p");
    p.textContent = `${e.name} ${e.quantity} -> $${e.price}`;
    ele.appendChild(p);
});
