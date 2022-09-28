const { Schema, model } = require('mongoose');

const doughSchema = new Schema({
  size: {
    type: String,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
  measurement: {
    type: String,
    required: true,
    default: 'OZ',
  },
}, { autoIndex: false });

const doughModel = model('dough', doughSchema);

module.exports = doughModel;
