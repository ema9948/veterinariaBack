import express from "express";
import "dotenv/config";
import "./db/db.js";
import "./model/Patient.js";
import cors from "cors";
import patienRoute from "./router/PatientRoute.js";
import recordRoute from "./router/Record.js";
import userRoute from "./router/UserRoute.js";
import sync from "./utils/syncModels.js";

const app = express();

const whitelist = [process.env.URL_FRONT, process.env.URL_FRONT2];

app.use(
  cors({
    origin: function (origin, callback) {
      if (whitelist.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
  })
);
app.use(express.json());
sync();

app.use("/api/v1/user", userRoute);
app.use("/api/v1/patient", patienRoute);
app.use("/api/v1/record", recordRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("DB ✌"));
