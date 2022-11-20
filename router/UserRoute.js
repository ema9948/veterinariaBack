import { Router } from "express";
import {
  login,
  register,
  resetPassword,
} from "../controller/userController.js";
import { authController } from "../middleware/expressValidator.js";
const userRoute = Router();

userRoute.post("/login", authController, login);
userRoute.post("/register", authController, register);
userRoute.post("/reset", authController, resetPassword);

export default userRoute;
