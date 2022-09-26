/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('order_discounts', {
    discount_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'orders',
        key: 'order_id'
      }
    },
    discount_type: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    discount_amount: {
      type: DataTypes.FLOAT,
      allowNull: false
    }
  }, {
    tableName: 'order_discounts'
  });
};
