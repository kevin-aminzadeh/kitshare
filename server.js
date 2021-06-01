const express = require('express');
const session = require('express-session');
// Configure Sequelize Session Store
const SequelizeStore = require('connect-session-sequelize')(session.Store);
// Import API Router
const routes = require('./routes');

const PORT = process.env.PORT || 3001;
const app = express();

// Import Sequelize Connection Config
const sequelize = require('./config/connection');

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// Configure Server Side Sessions
const sess = {
  secret: process.env.SESSION_SECRET || 'super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

// Instruct Express to Use Sessions Middleware
app.use(session(sess));

// Define API routes here
app.use(routes);

if (process.env.NODE_ENV !== 'test') {
  sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
      console.log(`🌎 ==> API server now on port ${PORT}!`);
    });
  });
}

module.exports = app;
