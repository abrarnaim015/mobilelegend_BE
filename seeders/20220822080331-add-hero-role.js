"use strict";

const heroRoleData = require("./JSON/mobilelegends_hero_role_seed.json");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("hero_roles", heroRoleData, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("hero_roles", null, {});
  },
};
