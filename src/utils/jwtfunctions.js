import jwt from "jsonwebtoken";
export const tokengenerating = payload => {
  let token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXP
  });
  return token;
};
 

