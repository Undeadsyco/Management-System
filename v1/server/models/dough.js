/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dough', {
    dough_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    dough_size: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    dough_weight: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    weight_type: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    last_updated: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'dough'
  });
};
