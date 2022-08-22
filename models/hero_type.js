"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class hero_type extends Model {
    static associate(models) {
      hero_type.belongsTo(models.hero);
    }
  }
  hero_type.init(
    {
      name: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            args: true,
            msg: "do not empty name",
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
      modelName: "hero_type",
    }
  );
  return hero_type;
};
