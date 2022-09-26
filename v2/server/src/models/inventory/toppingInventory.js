const { Schema, model, Types: { ObjectId } } = require('mongoose');

const toppingInventorySchema = new Schema({
  order_id: {
    type: ObjectId,
    ref: 'orders',
  },
  topping_id: {
    type: ObjectId,
    ref: 'toppings',
  },
  dough_id: {
    type: ObjectId,
    ref: 'dough',
  },
}, { autoIndex: false });

const toppingInventoryModel = model('topping_inventory', toppingInventorySchema);

module.exports = toppingInventoryModel;
