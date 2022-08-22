"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class hero extends Model {
    static associate(models) {
      hero.belongsTo(models.hero_role);
      hero.belongsTo(models.hero_type);
      hero.belongsTo(models.hero_skill);
      hero.hasMany(models.set_skin);
      hero.hasMany(models.counter_hero);
    }
  }
  hero.init(
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
      heroRoleId: {
        field: "hero_role_id",
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: {
            args: true,
            msg: "invalid id hero_role_id",
          },
        },
      },
      heroTypeId: {
        field: "hero_type_id",
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: {
            args: true,
            msg: "invalid id hero_type_id",
          },
        },
      },
      deployOrder: {
        field: "deploy_order",
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: {
            args: true,
            msg: "do not empty deploy_order",
          },
        },
      },
      heroSkillId: {
        field: "hero_skill_id",
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: {
            args: true,
            msg: "invalid id hero_skill_id",
          },
        },
      },
      setSkinId: {
        field: "set_skin_id",
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: {
            args: true,
            msg: "invalid id set_skin_id",
          },
        },
      },
      heroStory: {
        field: "hero_story",
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            args: true,
            msg: "do not empty hero_story",
          },
        },
      },
      gender: {
        type: DataTypes.ENUM,
        values: ["male", "female"],
        defaultValue: "male",
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
      price: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: {
            args: true,
            msg: "do not empty price",
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
      modelName: "hero",
    }
  );
  return hero;
};
