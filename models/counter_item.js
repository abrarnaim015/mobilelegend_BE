"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class counter_item extends Model {
    static associate(models) {
      counter_item.belongsTo(models.item);
    }
  }
  counter_item.init(
    {
      itemId: {
        field: "item_id",
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: {
            args: true,
            msg: "invalid id item_id",
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
      modelName: "counter_item",
    }
  );
  return counter_item;
};
