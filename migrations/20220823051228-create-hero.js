"use strict";
const TABLE_NAME = "heros";

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
      heroRoleId: {
        allowNull: false,
        field: "hero_role_id",
        type: DataTypes.INTEGER,
        references: {
          model: "hero_roles",
          key: "id",
        },
      },
      heroTypeId: {
        allowNull: false,
        field: "hero_type_id",
        type: DataTypes.INTEGER,
        references: {
          model: "hero_types",
          key: "id",
        },
      },
      deployOrder: {
        allowNull: false,
        field: "deploy_order",
        type: DataTypes.INTEGER,
      },
      heroSkillId: {
        allowNull: false,
        field: "hero_skill_id",
        type: DataTypes.INTEGER,
        references: {
          model: "hero_skills",
          key: "id",
        },
      },
      setSkinId: {
        allowNull: false,
        field: "set_skin_id",
        type: DataTypes.INTEGER,
        references: {
          model: "set_skins",
          key: "id",
        },
      },
      heroStory: {
        allowNull: false,
        field: "hero_story",
        type: DataTypes.STRING,
      },
      gender: {
        allowNull: false,
        type: DataTypes.ENUM,
        values: ["male", "female"],
      },
      image: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      price: {
        allowNull: false,
        type: DataTypes.INTEGER,
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
