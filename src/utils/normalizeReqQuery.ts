import { ReqQN } from "../../types/types";

export const normalizeReqQuery = (req: ReqQN) => {
  const page = Number(req.query.page) || undefined;
  const take = Number(req.query.take) || undefined;
  const name = req.query.name && String(req.query.name);
  let state;
  if (req.query.state === "true") state = true;
  if (req.query.state === "false") state = false;
  const role = req.query.role && String(req.query.role);
  let order: any = req.query.order && String(req.query.order);

  req.queryNormalized = { page, take, name, state, role, order };
};
