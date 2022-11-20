import { Sequelize, DataTypes } from "sequelize";
import sequelize from "../db/db.js";
const Records = sequelize.define("record", {
  description: {
    type: DataTypes.STRING,
    alllowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    alllowNull: false,
  },
  preci: {
    type: DataTypes.STRING,
    alllowNull: false,
  },
});

export default Records;
