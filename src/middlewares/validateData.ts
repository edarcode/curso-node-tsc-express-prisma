import { ZodSchema } from "zod";
import { Next, ReqQN, Res, TypeDataReq } from "../../types/types";
import { BODY } from "../constants/typeDataReq";

export const validateData = (
  schema: ZodSchema,
  typeDataReq: TypeDataReq = BODY
) => {
  const fn = (req: ReqQN, res: Res, next: Next) => {
    try {
      schema.parse(req[typeDataReq]);
      next();
    } catch (error) {
      res.status(400).json(error);
    }
  };

  return fn;
};
