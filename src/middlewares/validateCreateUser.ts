import { Next, Req, Res } from "../../types/types";
import { schemaCreateUser } from "../zod-schemas/createUser";

export const validateCreateUser = (req: Req, res: Res, next: Next) => {
  try {
    schemaCreateUser.parse(req.body);
    next();
  } catch (error) {
    res.status(400).json(error);
  }
};
