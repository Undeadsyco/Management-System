const { Schema, model, Types } = require('mongoose');

const orderSchema = new Schema({
  customer_name: {
    type: String,
    required: false,
  },
  pizza_list: [{
    pizza_id: {
      type: Types.ObjectId,
      ref: 'pizzas',
      required: true,
    },
    dough_id: {
      type: Types.ObjectId,
      ref: 'dough',
    },
    used_toppings: [{
      type: Types.ObjectId,
      ref: 'toppings',
      required: true,
    }],
    discount: {
      discount_type: {
        type: String,
        required: false,
      },
      amount: {
        type: Number,
        required: false,
      },
    },
  }],
  comments: [{
    type: String,
    required: false,
  }],
  subtotal: {
    type: Number,
    required: true,
  },
  tax: {
    type: Number,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
  paid_amount: {
    type: Number,
    required: true,
  },
  change: {
    type: Number,
    required: true,
  },
  order_date: {
    type: Date,
    required: true,
    default: new Date(),
  },
}, { autoIndex: false });

const orderModel = model('orders', orderSchema);

module.exports = orderModel;
