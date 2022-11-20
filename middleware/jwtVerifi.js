import jwt from "jsonwebtoken";

export const jwtVefiryMiddleware = (req, res, next) => {
  try {
    const auth = req?.headers?.authorization;
    const token = auth.split(" ")[1];
    const verify = jwt.verify(token, process.env.JWTSECRET);
    req.uid = verify?.uid;
    next();
  } catch (error) {
    return res.status(401).json({ error: error?.message });
  }
};
