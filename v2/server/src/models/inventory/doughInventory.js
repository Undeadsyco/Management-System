const { Schema, model, Types: { ObjectId } } = require('mongoose');

const doughInventorySchema = new Schema({
  order_id: {
    type: ObjectId,
    ref: 'orders',
  },
  dough_id: {
    type: ObjectId,
    ref: 'dough',
  },
}, { autoIndex: false });

const doughInventoryModel = model('dough_inventory', doughInventorySchema);

module.exports = doughInventoryModel;
