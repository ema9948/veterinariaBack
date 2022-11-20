import { Router } from "express";
import {
  addPatient,
  allPatients,
  deletePatient,
  patchPatient,
} from "../controller/patientController.js";
import { patientValid } from "../middleware/expressValidator.js";
import { jwtVefiryMiddleware } from "../middleware/jwtVerifi.js";
const patienRoute = Router();

patienRoute.get("/allPatients", jwtVefiryMiddleware, allPatients);
patienRoute.post("/addPatient", jwtVefiryMiddleware, patientValid, addPatient);
patienRoute.patch(
  "/patchPatient/:id",
  jwtVefiryMiddleware,
  patientValid,
  patchPatient
);
patienRoute.delete("/deletePatient/:id", jwtVefiryMiddleware, deletePatient);
export default patienRoute;
