const { Schema, model } = require('mongoose');

const toppingSchema = new Schema({
  topping: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  measurement: {
    type: String,
    required: true,
  },
  amount_per_size: [
    {
      size: {
        type: String,
        required: true,
      },
      amount: {
        type: Number,
        required: true,
      },
    },
  ],
  price: {
    type: Number,
    required: true,
  },
}, { autoIndex: false });

const toppingModel = model('toppings', toppingSchema);

module.exports = toppingModel;
