import { Sequelize } from "sequelize";
const host = process.env.URI;
const sequelize = new Sequelize(host, {
  logging: false,
});

try {
  await sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

export default sequelize;
