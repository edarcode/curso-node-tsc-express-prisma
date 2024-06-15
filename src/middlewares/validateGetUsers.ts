import { Next, ReqQN, Res } from "../../types/types";
import { schemaGetUsers } from "../zod-schemas/getUsers";

export const validateGetUsers = (req: ReqQN, res: Res, next: Next) => {
  try {
    schemaGetUsers.parse(req.query);
    req.queryNormalized = normalizeReqQuery(req);
    next();
  } catch (error) {
    res.status(400).json(error);
  }
};

const normalizeReqQuery = (req: ReqQN) => {
  const page = Number(req.query.page) || undefined;
  const take = Number(req.query.take) || undefined;
  const name = req.query.name && String(req.query.name);
  let state;
  if (req.query.state === "true") state = true;
  if (req.query.state === "false") state = false;
  const role = req.query.role && String(req.query.role);

  return { page, take, name, state, role };
};
