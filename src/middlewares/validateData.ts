import { ZodSchema } from "zod";
import { Next, ReqQN, Res, TypeDataReq } from "../../types/types";
import { BODY, QUERY } from "../constants/typeDataReq";

export const validateData = (
  schema: ZodSchema,
  typeDataReq: TypeDataReq = BODY
) => {
  const fn = (req: ReqQN, res: Res, next: Next) => {
    try {
      const dataNormalized = schema.parse(req[typeDataReq]);
      if (typeDataReq === QUERY) {
        req.queryNormalized = dataNormalized;
      }
      next();
    } catch (error) {
      res.status(400).json(error);
    }
  };

  return fn;
};
