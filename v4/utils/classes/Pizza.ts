import { dough, pizza, section, topping } from "../models/types";

/**
 * Pizza Class
 * @param {string} id
 * @param {string} _name
 * @param {section} _section
 * @param {topping[]} _topping
 * @param {dough[]} _sizes
 */
class Pizza implements pizza<string, section<string>, topping<string, {}>[], string[]> {
  constructor(
    private id: string,
    private _name: string,
    private _section: section<string>,
    private _toppings: topping<string, {}>[],
    private _sizes?: Map<string, string[]>,
  ) {
    this.id = id;
    this._name = _name;
    this._section = _section;
    this._toppings = _toppings;
    this._sizes = _sizes;
  }

  /**
   * gets pizza id
   * @return {string} pizza id
   */
  public get _id(): string {
    return this.id;
  }

  /**
   * gets pizza name
   * @return {string} pizza name
   */
  public get name(): string {
    return this._name;
  }

  /**
   * gets pizza section
   * @return {string} pizza section
   */
  public get section(): section<string> {
    return this._section;
  }

  /**
   * gets pizza topping
   * @return {string} pizza topping
   */
  public get toppings(): topping<string, {}>[] {
    return this._toppings;
  }

  /**
   * gets pizza sizes
   * @return {string[]} pizza sizes
   */
  public get sizes(): Map<string, string[]> {
    return this._sizes;
  }

  /**
   * changes class into object format
   * @returns {pizza} object in the shape of pizza type
   */
  public toObj(): pizza<string, section<string>, topping<string, {}>[], string[]> {
    return {
      _id: this._id,
      name: this._name,
      section: this._section,
      toppings: this._toppings,
      sizes: this._sizes ?? null
    }
  }
}

export default Pizza;
