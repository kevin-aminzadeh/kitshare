const User = require('./User');
const Listing = require('./Listing');
const PaymentMethod = require('./PaymentMethod');
const UserRole = require('./UserRole');
const Location = require('./Location');
const Booking = require('./Booking');
const Status = require('./Status');
const PriceInterval = require('./PriceInterval');

// User and Listing Model Relationships
User.hasMany(Listing, {
  foreignKey: 'owner_id',
  onDelete: 'CASCADE',
});

Listing.belongsTo(User, {
  foreignKey: 'owner_id',
  as: 'owner',
});

// User and PaymentMethod Model Relationships
User.hasMany(PaymentMethod, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

PaymentMethod.belongsTo(User, {
  foreignKey: 'user_id',
  as: 'owner',
});

// User and UserRole Model Relationships
User.belongsTo(UserRole, {
  foreignKey: 'role_id',
});

UserRole.hasMany(User, {
  foreignKey: 'role_id',
});

// User and Location Model Relationships
Location.hasMany(User, {
  foreignKey: 'location_id',
  onDelete: 'CASCADE',
});

User.belongsTo(Location, {
  foreignKey: 'location_id',
});

// User and Booking Model Relationships
User.hasMany(Booking, {
  foreignKey: 'customer_id',
  onDelete: 'CASCADE',
});

Booking.belongsTo(User, {
  foreignKey: 'customer_id',
  as: 'customer',
});

// Booking and Listing Relationships
Listing.hasMany(Booking, {
  foreignKey: 'listing_id',
  onDelete: 'CASCADE',
});

Booking.belongsTo(Listing, {
  foreignKey: 'listing_id',
});

// Booking and Status Relationships
Status.hasMany(Booking, {
  foreignKey: 'status_id',
});

Booking.belongsTo(Status, {
  foreignKey: 'status_id',
});

// Listing and PriceInterval Relationships
PriceInterval.hasMany(Listing, {
  foreignKey: 'price_interval_id',
});

Listing.belongsTo(PriceInterval, {
  foreignKey: 'price_interval_id',
});

// Listing and Location Relationships
Location.hasMany(Listing, {
  foreignKey: 'location_id',
  onDelete: 'CASCADE',
});

Listing.belongsTo(Location, {
  foreignKey: 'location_id',
});

module.exports = {
  Booking,
  Listing,
  Location,
  PaymentMethod,
  PriceInterval,
  Status,
  User,
  UserRole,
};
