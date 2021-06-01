const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class UserRole extends Model {}

UserRole.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'userRole',
  }
);

module.exports = UserRole;
