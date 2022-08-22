"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class hero_skill extends Model {
    static associate(models) {
      hero_skill.belongsTo(models.hero);
    }
  }
  hero_skill.init(
    {
      skill1: {
        field: "skill_1",
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            args: true,
            msg: "do not empty skill_1",
          },
        },
      },
      skill2: {
        field: "skill_2",
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            args: true,
            msg: "do not empty skill_2",
          },
        },
      },
      skill3: {
        field: "skill_3",
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            args: true,
            msg: "do not empty skill_3",
          },
        },
      },
      skill4: {
        field: "skill_4",
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            args: true,
            msg: "do not empty skill_4",
          },
        },
      },
      skillPassive: {
        field: "skill_passive",
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            args: true,
            msg: "do not empty skill_passive",
          },
        },
      },
      skill1Image: {
        field: "skill_1_image",
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            args: true,
            msg: "do not empty skill_1_image",
          },
        },
      },
      skill2Image: {
        field: "skill_2_image",
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            args: true,
            msg: "do not empty skill_2_image",
          },
        },
      },
      skill3Image: {
        field: "skill_3_image",
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            args: true,
            msg: "do not empty skill_3_image",
          },
        },
      },
      skill4Image: {
        field: "skill_4_image",
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            args: true,
            msg: "do not empty skill_4_image",
          },
        },
      },
      skillPassiveImage: {
        field: "skill_passive_image",
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            args: true,
            msg: "do not empty skill_passive_image",
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
      modelName: "hero_skill",
    }
  );
  return hero_skill;
};
