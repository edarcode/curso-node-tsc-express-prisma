import { Req, Res } from "../../types/types";
import { getAllUsers } from "../db/utils/user/getAllUsers";

export const getUsers = async (_req: Req, res: Res) => {
  try {
    const users = await getAllUsers();
    res.json(users);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};
