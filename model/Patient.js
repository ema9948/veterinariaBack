import { Sequelize, DataTypes } from "sequelize";
import sequelize from "../db/db.js";
import Records from "./Records.js";
const Patient = sequelize.define(
  "patient",
  {
    name: {
      type: DataTypes.STRING,
      alllowNull: false,
    },

    species: {
      type: DataTypes.STRING,
      alllowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      alllowNull: false,
    },
  },
  { timestamps: false }
);
Patient.hasMany(Records, {
  foreignKey: "patient_id",
});

export default Patient;
