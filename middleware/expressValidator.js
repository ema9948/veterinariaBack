import { validationResult, body } from "express-validator";

export const validationResultExpress = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(401).json({ errors: errors.array() });
  }
  next();
};

export const addRecordValid = [
  body("description", "description required").trim().notEmpty().escape(),
  body("preci", "preci required").trim().notEmpty().escape(),
  validationResultExpress,
];
export const patchRecordValid = [
  body("description", "description required").trim().notEmpty().escape(),
  body("preci", "preci required").trim().notEmpty().escape(),
  body("id", "id required").trim().notEmpty().escape(),
  validationResultExpress,
];

export const patientValid = [
  body("name", "name required").trim().notEmpty().escape(),
  body("species", "species required").trim().notEmpty().escape(),
  body("phone", "phone required").trim().notEmpty().escape(),
  validationResultExpress,
];

export const authController = [
  body("name", "name required").trim().notEmpty().escape(),
  body("password", "password required").trim().notEmpty().escape(),
  validationResultExpress,
];

export const validEstado = [
  body("dni").trim().notEmpty().escape(),
  validationResultExpress,
];
