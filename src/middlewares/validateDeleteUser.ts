import { Next, Req, Res } from "../../types/types";
import { schemaUuid } from "../zod-schemas/uuid";

export const validateDeleteUser = (req: Req, res: Res, next: Next) => {
  try {
    schemaUuid.parse(req.params.id);
    next();
  } catch (error) {
    res.status(400).json(error);
  }
};
