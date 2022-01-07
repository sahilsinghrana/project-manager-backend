const db = require("./models/index");

db.sync({
  alter: {
    drop: false,
  },
});

// db.sync({ force: true, alter: true });

// db.sync();

module.exports = db;
