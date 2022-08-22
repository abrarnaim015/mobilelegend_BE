"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class counter_hero extends Model {
    static associate(models) {
      counter_hero.belongsTo(models.hero);
    }
  }
  counter_hero.init(
    {
      heroId: {
        field: "hero_id",
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: {
            args: true,
            msg: "invalid id hero_id",
          },
        },
      },
      createdAt: {
        field: "created_at",
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        validate: {
          notEmpty: {
            args: false,
            msg: "do not empety created_at",
          },
        },
      },
      updatedAt: {
        field: "updated_at",
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        validate: {
          notEmpty: {
            args: false,
            msg: "do not empety updated_at",
          },
        },
      },
      deletedAt: {
        field: "deleted_at",
        type: DataTypes.DATE,
        validate: {
          isNull: true,
        },
      },
    },
    {
      sequelize,
      modelName: "counter_hero",
    }
  );
  return counter_hero;
};
