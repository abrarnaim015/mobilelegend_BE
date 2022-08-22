"use strict";

const TABLE_NAME = "hero_skills";
module.exports = {
  up: async (queryInterface, DataTypes = Sequelize) => {
    await queryInterface.createTable(TABLE_NAME, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      skill1: {
        field: "skill_1",
        allowNull: false,
        type: DataTypes.STRING,
      },
      skill2: {
        field: "skill_2",
        allowNull: false,
        type: DataTypes.STRING,
      },
      skill3: {
        field: "skill_3",
        allowNull: false,
        type: DataTypes.STRING,
      },
      skill4: {
        field: "skill_4",
        allowNull: false,
        type: DataTypes.STRING,
      },
      skillPassive: {
        field: "skill_passive",
        allowNull: false,
        type: DataTypes.STRING,
      },
      skill1Image: {
        field: "skill_1_image",
        allowNull: false,
        type: DataTypes.STRING,
      },
      skill2Image: {
        field: "skill_2_image",
        allowNull: false,
        type: DataTypes.STRING,
      },
      skill3Image: {
        field: "skill_3_image",
        allowNull: false,
        type: DataTypes.STRING,
      },
      skill4Image: {
        field: "skill_4_image",
        allowNull: false,
        type: DataTypes.STRING,
      },
      skillPassiveImage: {
        field: "skill_passive_image",
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
