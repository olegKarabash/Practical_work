import { Menu } from "./menu.js";
import { ScreenController } from "./screenController.js";
import { Cart } from "./cart.js";

const menu = new Menu();
const cart = new Cart();
const screenController = new ScreenController(menu, cart);

screenController.init();