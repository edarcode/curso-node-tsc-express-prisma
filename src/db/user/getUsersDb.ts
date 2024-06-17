import { connDb } from "../connDb";

type Params = {
  page?: number;
  take?: number;
  name?: string;
  state?: boolean;
  role?: string;
};

export const getUsersDb = async (params?: Params) => {
  const { page = 1, take = 10, name, state, role } = params || {};

  const totalUsers = await connDb.user.count({
    where: { name: { contains: name, mode: "insensitive" }, state, role },
  });

  const users = await connDb.user.findMany({
    skip: (page - 1) * take,
    take,
    where: { name: { contains: name, mode: "insensitive" }, state, role },
  });

  const totalPages = Math.ceil(totalUsers / take) || 1;

  return { page, totalPages, totalUsers, users };
};
