"use strict";

const heroTypeData = require("./JSON/mobilelegends_hero_type_seed.json");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("hero_types", heroTypeData, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("hero_types", null, {});
  },
};
