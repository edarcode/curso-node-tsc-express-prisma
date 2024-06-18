import { Next, ReqQN, Res } from "../../types/types";

export const normalizeData = (cb: Function) => {
  const fn = (req: ReqQN, res: Res, next: Next) => {
    try {
      cb(req);
      next();
    } catch (error) {
      res.status(400).json(error);
    }
  };

  return fn;
};
