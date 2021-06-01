const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class PaymentMethod extends Model {}

PaymentMethod.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    stripe_customer_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    stripe_payment_method_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
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
    modelName: 'paymentMethod',
  }
);

module.exports = PaymentMethod;
