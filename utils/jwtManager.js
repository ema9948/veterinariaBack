import jwt from "jsonwebtoken";

export const jwtGenerate = (uid, res) => {
  const expiresIn = 60 * 60 * 24 * 30;
  const shh = process.env.JWTSECRET;
  try {
    const token = jwt.sign({ uid: uid }, shh, {
      expiresIn: expiresIn,
    });
    return token;
  } catch (error) {
    return res.sendStatus(500);
  }
};
