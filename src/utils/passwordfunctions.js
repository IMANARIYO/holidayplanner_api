import bcrypt from "bcrypt";
import mongoose from "mongoose";
export const passHashing = async password => {
  const saltRounds = await bcrypt.genSalt(parseInt(process.env.SALT_ROUNDS));
  let hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
};
export const passComparer = async (password, hashedPass) => {
  let result = await bcrypt.compare(password, hashedPass);
  console.log("compare result ",result)
  return result;

};
