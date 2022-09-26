import { idTypeOptions } from "../models/types";

/**
 * abstract controller class for defining basic controller behavors
 */
interface Controller<model> {
  getOne(doughId: string): Promise<model>;
  getAll(): Promise<model[]>;
  createOne(): Promise<model>;
  createMany(): Promise<model[]>;
  editOne(): Promise<model>;
  editMany(): Promise<model[]>;
  deleteOne(): Promise<model>;
  deleteMany(): Promise<model[]>;
}

export default Controller;