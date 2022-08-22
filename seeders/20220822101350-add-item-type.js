"use strict";

const itemTypeData = require("./JSON/mobilelegends_item_type_seed.json");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("item_types", itemTypeData, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("item_types", null, {});
  },
};
