const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Listing extends Model {}

Listing.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    owner_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'listing',
  }
);

module.exports = Listing;
