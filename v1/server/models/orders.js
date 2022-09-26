/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('orders', {
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    Register_Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'register',
        key: 'Register_Id'
      }
    },
    order_name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    phone_number: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    subtotal: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    tax: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    total: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    gross_total: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    paid_amount: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    change: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    order_status: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    order_type: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    order_time: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'orders'
  });
};
