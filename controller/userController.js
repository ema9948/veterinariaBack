import User from "../model/User.js";
import { jwtGenerate } from "../utils/jwtManager.js";

export const register = async (req, res) => {
  const { name, password } = req.body;
  try {
    const existUser = await User.findOne({ where: { name } });
    if (existUser) return res.sendStatus(401);
    const newUser = User.create({ name, password });
    return res.sendStatus(201);
  } catch (error) {
    return res.sendStatus(500);
  }
};

export const login = async (req, res) => {
  const { name, password } = req.body;
  try {
    const user = await User.findOne({ where: { name } });
    if (!user) return res.sendStatus(404);
    if (!user.autenticate(password)) return res.sendStatus(401);
    const token = jwtGenerate(user.id, res);
    return res.status(200).json({ token: token });
  } catch (error) {
    return res.sendStatus(500);
  }
};

export const resetPassword = async (req, res) => {
  //? pedir el token para validar el usuario
  const { name, password } = req.body;
  try {
    let user = await User.findOne({ where: { name } });
    if (!user) return res.sendStatus(404);
    user.update({ password }, { where: { name } });
    return res.sendStatus(200);
  } catch (error) {
    return res.sendStatus(500);
  }
};
