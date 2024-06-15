import { ReqQN, Res } from "../../types/types";
import { getAllUsers } from "../db/utils/user/getAllUsers";

export const getUsers = async (req: ReqQN, res: Res) => {
  try {
    const users = await getAllUsers(req.queryNormalized);
    res.json(users);
  } catch (error) {
    console.error(error);
  }
};
