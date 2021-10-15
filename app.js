class Hamburger {
    static SIZE_SMALL = { param: "SIZE_SMALL", price: 50, calorie: 20 };
    static SIZE_MEDIUM = { param: "SIZE_MEDIUM", price: 75, calorie: 30 };
    static SIZE_LARGE = { param: "SIZE_LARGE", price: 100, calorie: 40 };
    static STUFFING_CHEESE = { param: "STUFFING_CHEESE", price: 10, calorie: 20 };
    static STUFFING_SALAD = { param: "STUFFING_SALAD", price: 20, calorie: 5 };
    static STUFFING_POTATO = { param: "STUFFING_POTATO", price: 15, calorie: 10 };
    static TOPPING_MAYO = { param: "TOPPING_MAYO", price: 20, calorie: 5 };
    static TOPPING_CONDIMENT = { param: "TOPPING_CONDIMENT", price: 15, calorie: 0 };

    constructor(hamburger) {
        this._price = hamburger.price;
        this._calories = hamburger.calorie;
    };

    addTopping = function(topping) {
        this._price += topping.price;
        this._calories += topping.calorie;
    }

    set setPrice(price) {
        this._price += price;
    }

    set setCalories(calories) {
        this._calories += calories;
    }

    get getPrice() {
        return this._price;
    }

    get getCalories() {
        return this._calories;
    }
};

const hamburger = new Hamburger(Hamburger.SIZE_SMALL);
// const hamburgerSecond = new Hamburger(Hamburger.SIZE_MEDIUM);

hamburger.addTopping(Hamburger.TOPPING_CONDIMENT);
hamburger.addTopping(Hamburger.STUFFING_POTATO);
hamburger.addTopping(Hamburger.STUFFING_SALAD);
hamburger.addTopping(Hamburger.STUFFING_CHEESE);

// hamburgerSecond.addTopping(Hamburger.STUFFING_SALAD);
// hamburgerSecond.addTopping(Hamburger.TOPPING_CONDIMENT);

console.log(`Price with sauce: ` + hamburger.getPrice);
console.log(`Callories with sauce: ` + hamburger.getCalories);

// console.log(`Price with sauce: ` + hamburgerSecond.getPrice);
// console.log(`Callories with sauce: ` + hamburgerSecond.getCalories);