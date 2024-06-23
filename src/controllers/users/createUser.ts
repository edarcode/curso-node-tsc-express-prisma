import { Req, Res } from "../../../types/types";
import { createUserDb } from "../../db/user/createUserDb";

export const createUser = async (req: Req, res: Res) => {
  try {
    await createUserDb(req.body);
    res.status(201).json();
  } catch (error) {
    res.status(500).json(error);
  }
};
