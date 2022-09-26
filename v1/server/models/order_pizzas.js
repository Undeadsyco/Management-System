/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('order_pizzas', {
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      refrerance: {
        module: 'orders',
        key: 'order_id',
      }
    },
    pizza_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      refrerance: {
        module: 'pizza',
        key: 'pizza_id',
      }
    },
    size: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    last_updated: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'order_pizzas'
  });
};
