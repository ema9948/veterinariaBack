import bcrypt from "sequelize-bcrypt";
import { Sequelize, DataTypes } from "sequelize";
import sequelize from "../db/db.js";
import Patient from "./Patient.js";

const User = sequelize.define(
  "user",
  {
    name: {
      type: DataTypes.STRING,
      alllowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      alllowNull: false,
    },
  },
  { timestamps: false }
);

bcrypt(User, {
  field: "password",
  rounds: 12,
  compare: "autenticate",
});

User.hasMany(Patient, {
  foreignKey: "user_id",
});

export default User;
