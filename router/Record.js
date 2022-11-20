import { Router } from "express";
import {
  addRecord,
  allRecords,
  deleteRecord,
  patchRecord,
} from "../controller/recordController.js";
import {
  addRecordValid,
  patchRecordValid,
} from "../middleware/expressValidator.js";
import { jwtVefiryMiddleware } from "../middleware/jwtVerifi.js";
const recordRoute = Router();

recordRoute.get("/allRecords/:id", jwtVefiryMiddleware, allRecords);
recordRoute.post(
  "/addRecord/:id",
  jwtVefiryMiddleware,
  addRecordValid,
  addRecord
);
recordRoute.patch(
  "/patchRecord/:id",
  jwtVefiryMiddleware,
  patchRecordValid,
  patchRecord
);
recordRoute.delete("/deleteRecord/:id", jwtVefiryMiddleware, deleteRecord);
export default recordRoute;
