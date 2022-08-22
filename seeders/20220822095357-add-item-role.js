"use strict";

const itemRoleData = require("./JSON/mobilelegends_item_role_seed.json");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("item_roles", itemRoleData, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("item_roles", null, {});
  },
};
