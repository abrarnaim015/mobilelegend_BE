"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class set_skin extends Model {
    static associate(models) {
      set_skin.belongsTo(models.hero);
    }
  }
  set_skin.init(
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
      image: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            args: true,
            msg: "do not empty image",
          },
        },
      },
      description: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            args: true,
            msg: "do not empty description",
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
      modelName: "set_skin",
    }
  );
  return set_skin;
};
