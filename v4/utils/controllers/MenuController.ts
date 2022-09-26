import SectionController from "./SectionController";
import ToppingController from "./ToppingController";
import PizzaController from "./PizzaController";
import { menu } from '../models/types'

/** static controller class for managing menu */
class MenuController {
  /**
   * calls get all functions on Section, Topping, and Pizza controllers
   * to retrive all records for each model
   * @returns {menu} menu object
   */
  static async createMenu(): Promise<menu> {
    const sectionList = await SectionController.getAll();
    const toppingList = await ToppingController.getAll();
    const pizzaList = await PizzaController.getAll();

    return {
      sections: sectionList,
      pizzas: pizzaList,
      toppings: toppingList
    }
  }
}

export default MenuController;