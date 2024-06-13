import { Req, Res } from "../../types/types";

export const notFound = (_req: Req, res: Res) =>
  res.status(404).json({ msg: "404" });
