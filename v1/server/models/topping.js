/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('topping', {
    topping_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    topping: {
      type: DataTypes.STRING(45),
      allowNull: false,
      unique: true
    },
    topping_type: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    measurment_type: {
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
    tableName: 'topping'
  });
};
