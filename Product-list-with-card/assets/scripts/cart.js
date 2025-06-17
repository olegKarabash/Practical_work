export class Cart {
  constructor() {
    this.cart = new Map();
    this.totalItems = 0;
    this.totalPrice = 0;
  }

  changeQuantity(item, operation) {
    if (operation === -1 && !this.cart.has(item)) {
      // console.log("Item not in cart");
    } else if (operation === -1 && this.cart.get(item) === 1) {
      this.totalPrice -= item.price;
      --this.totalItems;
      this.cart.delete(item);
    } else if (operation === 0) {
      this.totalItems -= this.cart.get(item);
      this.totalPrice -= item.price * this.cart.get(item);
      this.cart.delete(item);
    } else {
      this.cart.set(item, this.cart.get(item) + operation || 1);
      this.totalItems += operation;
      this.totalPrice += item.price * operation;
    }
  }

  getItemsInCart() {
    return this.cart;
  }

  getTotalItemsInCart() {
    return this.totalItems;
  }

  isCartEmpty() {
    return this.cart.size === 0;
  }

  getTotalPrice() {
    return this.totalPrice;
  }

  clearCart() {
    this.cart.clear();
    this.totalItems = 0;
    this.totalPrice = 0;
  }
}
