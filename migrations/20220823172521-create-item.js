"use strict";
const TABLE_NAME = "items";

module.exports = {
  up: async (queryInterface, DataTypes = Sequelize) => {
    await queryInterface.createTable(TABLE_NAME, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      price: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      itemRoleId: {
        field: "item_role_id",
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "item_roles",
          key: "id",
        },
      },
      attackPassive: {
        field: "attack_passive",
        allowNull: false,
        type: DataTypes.STRING,
      },
      itemTypeId: {
        field: "item_type_id",
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "item_types",
          key: "id",
        },
      },
      image: {
        allowNull: false,
        type: DataTypes.STRING,
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
