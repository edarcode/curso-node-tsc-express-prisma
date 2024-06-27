import { Prisma } from "@prisma/client";
import { QueryParsedGetUsers } from "../../../types/types";
import { connDb } from "../connDb";

export const getUsersDb = async (queryParsed?: QueryParsedGetUsers) => {
  const {
    page = 1,
    take = 10,
    name,
    username,
    state,
    role,
    order,
  } = queryParsed || {};

  const where: Prisma.UserWhereInput = {
    name: { contains: name, mode: "insensitive" },
    username,
    state,
    role,
  };

  const totalUsers = await connDb.user.count({ where });

  const users = await connDb.user.findMany({
    skip: (page - 1) * take,
    take,
    where,
    orderBy: order && ORDER_BY[order],
  });

  const totalPages = Math.ceil(totalUsers / take) || 1;

  return { page, totalPages, users };
};

const ORDER_BY = {
  name: { name: "asc" },
  role: { role: "asc" },
  state: { state: "asc" },
} as const;
