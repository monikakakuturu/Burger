const orm = require("../config/orm.js");

const burger = {
  selectAll: (callback) => {
    orm.selectAll("burgers", (result) => {
      callback(result);
    });
  },

  insertOne: (col, vals, callback) => {
    orm.insertOne("burgers", cols, vals, (result) => {
      callback(result);
    });
  },

  updateOne: (col, vals, condition, callback) => {
    orm.updateOne("burgers", cols, vals, condition, (result) => {
      callback(result);
    });
  },
};

module.exports = burger;
