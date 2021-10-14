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

let orderHamburger = {
    SIZE_SMALL: { param: "SIZE_SMALL", price: 50, calorie: 20 },
    SIZE_MEDIUM: { param: "SIZE_MEDIUM", price: 75, calorie: 30 },
    SIZE_LARGE: { param: "SIZE_LARGE", price: 100, calorie: 40 },
    STUFFING_CHEESE: { param: "STUFFING_CHEESE", price: 10, calorie: 20 },
    STUFFING_SALAD: { param: "STUFFING_SALAD", price: 20, calorie: 5 },
    STUFFING_POTATO: { param: "STUFFING_POTATO", price: 15, calorie: 10 },
    TOPPING_MAYO: { param: "TOPPING_MAYO", price: 20, calorie: 5 },
    TOPPING_CONDIMENT: { param: "TOPPING_CONDIMENT", price: 15, calorie: 0 }
};
console.log(orderHamburger.SIZE_SMALL.price)