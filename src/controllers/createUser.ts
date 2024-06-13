import { Req, Res } from "../../types/types";
import User from "../models/User";

export const createUser = (req: Req, res: Res) => {
  const { name, state, role } = req.body;
  User.createUser({ name, role, state });
  res.status(201).json();
};
