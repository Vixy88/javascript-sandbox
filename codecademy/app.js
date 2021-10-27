const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: [],
  },
  set appetizers(appetizer) {
    this.appetizers.push(appetizer);
  },
  get appetizers() {
    return this.appetizers;
  },
  set mains(main) {
    this.mains.push(main);
  },
  get mains() {
    return this.mains;
  },
  set desserts(dessert) {
    this.desserts.push(dessert);
  },
  get desserts() {
    return this.desserts;
  },
  get courses() {
    return {
      appetizers: this._courses.appetizers,
      mains: this._courses.mains,
      desserts: this._courses.desserts,
    };
  },
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice,
    };
    this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },
  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse("appetizers");
    const main = this.getRandomDishFromCourse("mains");
    const dessert = this.getRandomDishFromCourse("desserts");
    const totalPrice = appetizer.price + main.price + dessert.price;
    return `Your meal consists of: ${appetizer.name}, ${main.name}, and for dessert, ${dessert.name}. The total price is ${totalPrice}.`;
  },
};
menu.addDishToCourse("appetizers", "Fried Mozzarella", 6.0);
menu.addDishToCourse("appetizers", "Fried Pickles", 5.5);
menu.addDishToCourse("appetizers", "Barbecue Chicken Flatbread", 8.25);

menu.addDishToCourse("mains", "Chicken Piccata", 15.0);
menu.addDishToCourse("mains", "Shrimp Scampi", 18.5);
menu.addDishToCourse("mains", "Penne alla Vodka", 14.5);

menu.addDishToCourse("desserts", "Brownie Sundae", 6.5);
menu.addDishToCourse("desserts", "Tiramisu", 5.0);
menu.addDishToCourse("desserts", "Pecan Pie", 5.25);

const meal = menu.generateRandomMeal();
console.log(meal);
