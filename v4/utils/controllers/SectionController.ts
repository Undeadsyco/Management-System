//dependencies
import { Types } from 'mongoose'

//utils
import { sectionModel } from "../models";
import { section } from "../models/types";
import { Section } from "../classes";
import Controller from "./types";

/**
 * controller class for interacting with dough model 
 * to create/edit/delete records and creating dough objects 
 * when retrived records
 */
class SectionController implements Controller<section<string>> {
  /**
   * retrives selected document with given id
   * @param {string} sectionId id to be used to look up document
   * @returns {section<string>} section object
   */
  async getOne(sectionId: string): Promise<section<string>> {
    const section: section = await sectionModel<section>.findById(new Types.ObjectId(sectionId)) as unknown as section;
    if (!section) throw new Error(`was unable to find section matching id: ${sectionId}`);

    return new Section(section['_id'].toString(), section.name).toObj()
  }

  /**
   * retrives all documents from model
   * @returns {Array<section<string>>} list of section objects
   */
  async getAll(): Promise<section<string>[]> {
    const sectionList: section[] = await sectionModel<section>.find() as unknown as section[];
    if (!sectionList) throw new Error('was unable to retrive section list');

    return sectionList.map((section: section) => new Section(section['_id'].toString(), section.name).toObj())
  }
  
  /** method not yet implemented */
  async createOne(): Promise<section<string>> {
    throw new Error('Method not implemented.');
  }

  /** method not yet implemented */
  async createMany(): Promise<section<string>[]> {
    throw new Error('Method not implemented.');
  }
  
  /** method not yet implemented */
  async editOne(): Promise<section<string>> {
    throw new Error('Method not implemented.');
  }

  /** method not yet implemented */
  async editMany(): Promise<section<string>[]> {
    throw new Error('Method not implemented.');
  }

  /** method not yet implemented */
  async deleteOne(): Promise<section<string>> {
    throw new Error('Method not implemented.');
  }

  /** method not yet implemented */
  async deleteMany(): Promise<section<string>[]> {
    throw new Error('Method not implemented.');
  }
}

export default new SectionController();