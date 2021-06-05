const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class User extends Model {
  checkPassword(attempt) {
    return bcrypt.compareSync(attempt, this.password);
  }
}

User.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      unique: true,
      allowNull: false,
      primaryKey: true,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    dob: {
      type: DataTypes.DATEONLY,
      validate: {
        isBefore: Date.now,
      },
    },
    street_address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mobile: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8, 50],
      },
    },
    is_verified: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    role_id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: 'c35388e9-3776-4d24-9dac-790339a5a95a',
      references: {
        model: 'userRole',
        key: 'id',
      },
    },
    location_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'location',
        key: 'id',
      },
    },
  },
  {
    hooks: {
      // Hash User Password On Create
      beforeCreate: async (userData) => {
        const newUserData = userData;
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
      // Hash User Password On Update
      beforeUpdate: async (userData) => {
        const updatedUserData = userData;
        updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
        return updatedUserData;
      },
    },
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  }
);

module.exports = User;
