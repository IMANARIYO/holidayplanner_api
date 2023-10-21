import bcrypt from "bcrypt";
import mongoose from "mongoose";
export const passHashing = async password => {
  const saltRounds = await bcrypt.genSalt(parseInt(process.env.saltRounds));
  console.log("to view we acess  saltrounds in env", process.env.saltRounds);
  console.log("saltRounds produced",saltRounds);
  console.log("password",password)
  let hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
};
export const passComparer = async (password, hashedPass) => {
  let result = await bcrypt.compare(password, hashedPass);
  console.log("compare result ",result)
  return result;

};
