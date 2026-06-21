import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { pool } from "../../db";
import type { ILoginUser } from "./auth.interface";
import config from "../../config";

const loginUserIntoDB = async (payload: ILoginUser) => {
  const { email, password } = payload;

  const userData = await pool.query(
    `
    SELECT * FROM users WHERE email = $1
    `,
    [email],
  );

  if (userData.rows.length === 0) {
    // check user is exists
    throw new Error("Invalid Credentials!");
  }
  const user = userData.rows[0];

  const mathPassword = await bcrypt.compare(password, user.password); // compare the password

  if (!mathPassword) {
    throw new Error("Invalid Credentials!");
  }
  // Generate Token
  const jwtPayload = {
    id: user.id,
    name: user.name,
    email: user.email,
    is_active: user.is_active,
  };

  const accessToken = jwt.sign(jwtPayload, config.secret as string, {
    expiresIn: "1d",
  });
  return { accessToken };
};

export const authService = {
  loginUserIntoDB,
};
