"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class item extends Model {
    static associate(models) {
      item.belongsTo(models.item_role);
      item.belongsToMany(models.item_type);
      item.belongsToMany(models.counter_item);
    }
  }
  item.init(
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
      price: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: {
            args: true,
            msg: "do not empty price",
          },
          isInt: {
            args: true,
            msg: "must be number",
          },
          min: {
            args: [0],
            msg: "price min 0",
          },
        },
      },
      itemRoleId: {
        field: "item_role_id",
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: {
            args: true,
            msg: "invalid id item_role_id",
          },
        },
      },
      attackPassive: {
        field: "attack_passive",
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            args: true,
            msg: "do not empty attack_passive",
          },
        },
      },
      itemTypeId: {
        field: "item_type_id",
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: {
            args: true,
            msg: "invalid id item_type_id",
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
      modelName: "item",
    }
  );
  return item;
};
