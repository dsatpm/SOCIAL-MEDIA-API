// import dependencies
const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');

// setup express and port
const app = express();
const PORT = process.env.PORT || 3001;

// use express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// use routes
app.use(routes);

// start server and connect to db
db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});