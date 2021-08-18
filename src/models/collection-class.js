"use strict";

class Collection {
  constructor(model) {
    this.model = model;
    //this model should be a valid sequelize model
  }

  async getAll() {
    try{
      let allRecords = await this.model.findAll();
      return allRecords;
    }catch(err){
      console.log(`Error In The Collection getAll ${err}`);
    }
  }
  async create(modelInfo) {
    try {
      let record = await this.model.create(modelInfo);
      return record;
    } catch (err) {
      console.log(`Error In The Collection Create ${err}`);
    }
  }
  async get(id) {
    let record = await this.model.findOne({ where: { id: id } });
    return record;
  }
  async update(id, modelInfo) {
    let record = await this.model.findOne({ where: { id } });
    let updatedRecored = await record.update(modelInfo);
    return updatedRecored;
  }
  async delete(id) {
    await this.model.destroy({ where: { id } });
  }
}

module.exports = Collection;
