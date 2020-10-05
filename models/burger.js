const orm = require("../config/orm.js");

const burger = {
  selectAll: (callback) => {
    orm.selectAll("burgers", (result) => {
      callback(result);
    });
  },

  insertOne: (cols, vals, callback) => {
    orm.insertOne("burgers", cols, vals, (result) => {
      callback(result);
    });
  },

  updateOne: (cols, condition, callback) => {
    orm.updateOne("burgers", cols, condition, (result) => {
      callback(result);
    });
  },
};

module.exports = burger;
