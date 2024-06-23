import { Req, Res } from "../../../types/types";
import { deleteUserDb } from "../../db/user/deleteUserDb";

export const deleteUser = async (req: Req, res: Res) => {
  const { id } = req.params;
  try {
    await deleteUserDb(id);
    res.status(204).json();
  } catch (error) {
    res.status(400).json(error);
  }
};
