const Hamburger = {
    SIZE_SMALL: { param: "SIZE_SMALL", price: 50, calorie: 20 },
    SIZE_MEDIUM: { param: "SIZE_MEDIUM", price: 75, calorie: 30 },
    SIZE_LARGE: { param: "SIZE_LARGE", price: 100, calorie: 40 },
    STUFFING_CHEESE: { param: "STUFFING_CHEESE", price: 10, calorie: 20 },
    STUFFING_SALAD: { param: "STUFFING_SALAD", price: 20, calorie: 5 },
    STUFFING_POTATO: { param: "STUFFING_POTATO", price: 15, calorie: 10 },
    TOPPING_MAYO: { param: "TOPPING_MAYO", price: 20, calorie: 5 },
    TOPPING_CONDIMENT: { param: "TOPPING_CONDIMENT", price: 15, calorie: 0 }
};

class NewHamburger {
    constructor(hamburger) {
        this.price = hamburger.price;
        this.calories = hamburger.calorie;
    };

    AddTopping = function(topping) {
        this.price += topping.price;
        this.calories += topping.calorie;
    }

    SetPrice(price) {
        this.price += price;
    }

    setColories(calories) {
        this.calories += calories;
    }

    GetPrice() {
        return this.price;
    }

    GetCalories() {
        return this.calories;
    }
};

const ham = new NewHamburger(Hamburger.SIZE_SMALL);
//alert("Price: " + ham.price + "\nColories: " + ham.calories);
ham.AddTopping(Hamburger.TOPPING_CONDIMENT);
//alert("First" + "Price: " + ham.price + "\nColories: " + ham.calories);

const secondHam = new NewHamburger(Hamburger.SIZE_LARGE);

//alert("Second\n" + "Price: " + secondHam.price + "\nColories: " + secondHam.calories);

console.log(ham.GetCalories());

ham.getColories(20);

console.log(ham.GetCalories());


// function OrderHamburger(humburger) {
//     this.price = humburger.price;
//     this.calorie = humburger.calorie;

//     this.addTopping = function(topping) {
//         this.price += topping.price;
//         this.calorie += topping.calorie;
//     }
// }

// const hamburger = new OrderHamburger(Hamburger.SIZE_MEDIUM);
// hamburger.addTopping(Hamburger.TOPPING_MAYO);
// hamburger.addTopping(Hamburger.STUFFING_CHEESE);



// console.log(hamburger.price + "\n" + hamburger.calorie);

// function Burger(size) {
//     this.size = size;
//     this.kkal = 20;
//     this.cost = 50;
// }

// const burger = new Burger("Small");
// const burger1 = new Burger("Medium");
// const burger2 = new Burger("Big");

// console.log(burger.size)
// console.log(burger.kkal)
// console.log(burger.cost)



// function FillingHamburger() {
//     this.cheese = cheese;
//     this.salad = salad;
//     this.potatoes = potatoes;
//     this.condiment = condiment;
//     this.mayo = mayo;
// }