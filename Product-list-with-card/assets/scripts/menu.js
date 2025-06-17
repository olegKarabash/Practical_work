export class Menu {
  constructor() {
    this.items = [];
  }

  addItems() {
    return this.getItems().then((data) => {
      data.forEach((item, index) => {
        item.index = index;
        this.items.push(item);
      });
    });
  }

  getItems() {
    if (this.items.length > 0) {
      return this.items;
    }

    return fetch("./data.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        return data;
      })
      .catch((error) => {
        console.log(error);
        return {};
      });
  }
}
