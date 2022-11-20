import { Sequelize } from "sequelize";
const host = process.env.URI;
const dbname = process.env.NAME;
const username = process.env.USERNAMEDB;
const password = process.env.USERPASS;
const sequelize = new Sequelize(dbname, username, password, {
  host: host,
  dialect: "mysql",
  logging: false,
  dialectOptions: {
    ssl: {
      rejectUnauthorized: true,
    },
  },
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
