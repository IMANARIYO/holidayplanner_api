import bcrypt from "bcrypt";
export const passHashing = async password => {
  const saltRounds = await bcrypt.genSalt(parseInt(process.env.saltRounds));
  let hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
};
export const passComparer = async (password, hashedPass) => {
  let result = await bcrypt.compare(password, hashedPass);
  return result;
};
