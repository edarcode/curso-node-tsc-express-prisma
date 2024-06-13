import { Req, Res } from "../../types/types";
import User from "../models/User";

export const updateUser = (req: Req, res: Res) => {
  const { id } = req.params;
  const dataToUpdate = req.body;
  try {
    User.updateUser(id, dataToUpdate);
    res.status(204).json();
  } catch (error) {
    res.status(400).json(error);
  }
};
