function pizzaOven(crustType, sauceType, cheeses, toppings) {
  var pizza = {
    crust: crustType,
    sauce: sauceType,
    cheese: cheeses,
    toppings: toppings
  };
 return pizza;
}

var pizza1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
console.log(pizza1);

var pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(pizza2);

