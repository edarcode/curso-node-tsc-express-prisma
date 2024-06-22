import { ReqQN, Res } from "../../types/types";
import { getUsersDb } from "../db/user/getUsersDb";

export const getUsers = async (req: ReqQN, res: Res) => {
  try {
    console.log(req.queryNormalized);
    const users = await getUsersDb(req.queryNormalized);
    res.json(users);
  } catch (error) {
    console.error(error);
  }
};
