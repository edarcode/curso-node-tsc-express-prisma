import { Req, Res } from "../../../types/types";
import { updateUserDb } from "../../db/user/updateUserDb";

export const updateUser = async (req: Req, res: Res) => {
  const { id } = req.params;
  const dataToUpdate = req.body;
  try {
    await updateUserDb(id, dataToUpdate);
    res.status(204).json();
  } catch (error) {
    res.status(400).json(error);
  }
};
