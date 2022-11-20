import { Router } from "express";
import {
  addRecord,
  allRecords,
  deleteRecord,
} from "../controller/recordController.js";
import { addRecordValid } from "../middleware/expressValidator.js";
import { jwtVefiryMiddleware } from "../middleware/jwtVerifi.js";
const recordRoute = Router();

recordRoute.get("/allRecords/:id", jwtVefiryMiddleware, allRecords);
recordRoute.post(
  "/addRecord/:id",
  jwtVefiryMiddleware,
  addRecordValid,
  addRecord
);

recordRoute.delete("/deleteRecord/:id", jwtVefiryMiddleware, deleteRecord);
export default recordRoute;
