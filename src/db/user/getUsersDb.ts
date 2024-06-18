import { OrderUserBy } from "../../../types/types";
import { connDb } from "../connDb";

export const getUsersDb = async (params?: Params) => {
  const { page = 1, take = 10, name, state, role, order } = params || {};

  const totalUsers = await connDb.user.count({
    where: { name: { contains: name, mode: "insensitive" }, state, role },
  });

  const users = await connDb.user.findMany({
    skip: (page - 1) * take,
    take,
    where: { name: { contains: name, mode: "insensitive" }, state, role },
    orderBy: order && orderBy[order],
  });

  const totalPages = Math.ceil(totalUsers / take) || 1;

  return { page, totalPages, totalUsers, users };
};

const orderBy: OrderBy = {
  name: { name: "asc" },
  role: { role: "asc" },
  state: { state: "asc" },
};

type Params = {
  page?: number;
  take?: number;
  name?: string;
  state?: boolean;
  role?: string;
  order?: OrderUserBy;
};

type OrderDir = "asc" | "desc";
type OrderName = { name: OrderDir };
type OrderRole = { role: OrderDir };
type OrderState = { state: OrderDir };
type OrderBy = {
  name: OrderName;
  role: OrderRole;
  state: OrderState;
};
