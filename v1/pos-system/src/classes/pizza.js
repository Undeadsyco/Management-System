export default class Pizza {
  constructor(id, name, size, price, toppings) {
    this.index = undefined;
    this.id = id;
    this.name = name;
    this.size = size;
    this.price = price;
    this.toppings = toppings;
    this.addedToppings = [];
    this.comments = [];
  }

  setIndex(index) {
    this.index = index;
  }

  addComment(comment) {
    this.comments.push(comment);
  }

  removeComment(comment) {
    this.comments = this.comments.filter((item) => item !== comment);
  }

  addTopping(topping) {
    let found = false;

    for (let i = 0; i < this.toppings.length; i += 1) {
      if (topping === this.toppings[i].topping) {
        this.addedToppings.push(`Extra ${topping}`);
        found = true;
        break;
      }
    }

    if (!found) {
      this.addedToppings.push(topping);
    }
  }

  removeTopping(topping) {
    this.addedToppings = this.addedToppings.filter((item) => item !== topping);
  }
}
