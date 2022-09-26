import { section } from "../models/types";

/** Section class 
  * @param {string} id 
  * @param {string} _name 
  */
class Section implements section<string> {

  constructor(
    private id: string,
    private _name: string
  ) {
    this.id = id;
    this._name = _name
  }

  /**
   * gets the section id
   * @return {string} the object id
   */
  public get _id(): string {
    return this.id;
  }

  /**
   * gets the section name
   * @return {string} the section name 
   */
  public get name(): string {
    return this._name;
  }

  /**
   * changes class into object format
   * @returns {section} object in the shape of section type
   */
  public toObj(): section<string> {
    return {
      _id: this._id,
      name: this.name,
    }
  }
}

export default Section;
