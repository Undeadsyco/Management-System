const { Schema, model, Types } = require('mongoose');

const userSchema = new Schema({
  employee: {
    type: Types.ObjectId,
    ref: 'employees',
  },
  username: {
    type: String,
    allowNull: false,
  },
  password: {
    type: String,
    allowNull: false,
  },
}, { autoIndex: false });

const managementUserModel = model('managementUser', userSchema);

module.exports = managementUserModel;
