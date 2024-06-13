import { Next, Req, Res } from "../../types/types";
import { schemaUpdateUser } from "../zod-schemas/updateUser";

export const validateUpdateUser = (req: Req, res: Res, next: Next) => {
  try {
    schemaUpdateUser.parse(req.body);
    next();
  } catch (error) {
    res.status(400).json(error);
  }
};
