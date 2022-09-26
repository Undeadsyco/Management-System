/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pizza_dough', {
    pizza_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    dough_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    pizza_price: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    Last_updated: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'pizza_dough'
  });
};
