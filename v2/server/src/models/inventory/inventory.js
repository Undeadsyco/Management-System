const { Schema, model, Types: { ObjectId } } = require('mongoose');

const inventorySchema = new Schema({
  inventory: [{
    item: {
      type: ObjectId,
      required: true,
    },
    measurement: {
      type: String,
      required: true,
    },
    price_per_measurement: {
      type: Number,
      required: true,
    },
    calculated_usage: {
      type: Number,
      required: true,
    },
    actual_usage: {
      type: Number,
      required: true,
      default: 0,
    },
    calculated_cost: {
      type: Number,
      required: true,
    },
    actual_cost: {
      type: Number,
      required: true,
    },
    usage_percentage_diffrence: {
      type: Number,
      required: true,
    },
    cost_doller_diffrence: {
      type: Number,
      required: true,
    },
  }],
  start_date: {
    type: Date,
    required: true,
  },
  end_date: {
    type: Date,
    required: true,
  },
  date_taken: {
    type: Date,
    required: true,
    default: new Date(),
  },
}, { autoIndex: false });

inventorySchema.virtual('doughItem', {
  ref: 'dough',
  localField: 'item',
  foreignField: '_id',
  justOne: true,
});

inventorySchema.virtual('toppingItem', {
  ref: 'topping',
  localField: 'item',
  foreignField: '_id',
  justOne: true,
});

const inventoryModel = model('inventory', inventorySchema);

module.exports = inventoryModel;
