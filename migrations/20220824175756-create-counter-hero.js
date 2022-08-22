"use strict";

const TABLE_NAME = "counter_heros";
module.exports = {
  up: async (queryInterface, DataTypes = Sequelize) => {
    await queryInterface.createTable(TABLE_NAME, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      heroId: {
        field: "hero_id",
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "heros",
          key: "id",
        },
      },
      createdAt: {
        field: "created_at",
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        field: "updated_at",
        allowNull: false,
        type: DataTypes.DATE,
      },
      deletedAt: {
        field: "deleted_at",
        type: DataTypes.DATE,
        allowNull: true,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable(TABLE_NAME);
  },
};
