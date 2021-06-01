const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Booking extends Model {}

Booking.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    time_from: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    time_to: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    price_total: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    listing_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'listing',
        key: 'id',
      },
    },
    customer_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    status_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'bookingStatus',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'booking',
  }
);

module.exports = Booking;
