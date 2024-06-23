import { Req, Res } from "../../../types/types";
import { getUserByIdDb } from "../../db/user/getUserByIdDb";

export const getUserById = async (req: Req, res: Res) => {
  const { id } = req.params;
  try {
    const user = (await getUserByIdDb(id)) || { msg: "Not found user" };
    res.json(user);
  } catch (error) {
    console.error(error);
  }
};
