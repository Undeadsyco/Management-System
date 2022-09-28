const { Schema, model, Types } = require('mongoose');

const sectionSchema = new Schema({
  name: {
    type: String,
    allownull: false,
  },
  pizzas: [{
    type: Types.ObjectId,
    ref: 'pizzas',
  }],
}, { autoIndex: false });

const sectionModel = model('sections', sectionSchema);

module.exports = sectionModel;
