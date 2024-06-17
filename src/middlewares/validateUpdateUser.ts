import { Next, Req, Res } from "../../types/types";
import { schemaUpdateUser } from "../zod-schemas/updateUser";
import { schemaUuid } from "../zod-schemas/uuid";

export const validateUpdateUser = (req: Req, res: Res, next: Next) => {
  try {
    schemaUuid.parse(req.params.id);
    schemaUpdateUser.parse(req.body);
    next();
  } catch (error) {
    res.status(400).json(error);
  }
};
