import { Req, Res } from "../../types/types";
import User from "../models/User";

export const deleteUser = (req: Req, res: Res) => {
  const { id } = req.params;
  try {
    User.deleteUser(id);
    res.status(204).json();
  } catch (error) {
    res.status(400).json(error);
  }
};
