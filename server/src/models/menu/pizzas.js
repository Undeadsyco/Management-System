const { Schema, model, Types } = require('mongoose');

const pizzaSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  section: {
    type: Types.ObjectId,
    ref: 'sections',
  },
  toppings: [{
    type: Types.ObjectId,
    ref: 'toppings',
  }],
  sizes: [{
    size: {
      type: String,
      required: true,
      unique: true,
    },
    dough: {
      type: Types.ObjectId,
      ref: 'dough',
    },
    price: {
      type: Number,
      required: true,
    },
  }],
}, { autoIndex: false });

const pizzaModel = model('pizzas', pizzaSchema);

module.exports = pizzaModel;
