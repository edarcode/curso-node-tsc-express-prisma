import { Req, Res } from "../../types/types";
import User from "../models/User";

export const getUsers = (_req: Req, res: Res) => {
  const users = User.getAllUsers();
  res.json(users);
};
