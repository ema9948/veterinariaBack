import { Sequelize } from "sequelize";
const host = process.env.URI;
const dbname = process.env.NAME;
const username = process.env.USERNAME;
const password = process.env.USERPASS;

const sequelize = new Sequelize("veterinaria", "root", "", {
  host: "localhost",
  dialect: "mysql",
  logging: false,
  define: {
    timestamps: false,
  },
});

try {
  await sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

export default sequelize;
