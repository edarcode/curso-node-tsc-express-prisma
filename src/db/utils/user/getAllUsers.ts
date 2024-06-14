import { connDb } from "../../connDb";

export const getAllUsers = async (params?: {
  page?: number;
  take?: number;
}) => {
  const { page = 1, take = 10 } = params || {};
  const totalUsers = await connDb.user.count();
  const users = await connDb.user.findMany({
    skip: (page - 1) * take,
    take,
  });
  console.log(totalUsers, page);
  return { page, totalPages: Math.ceil(totalUsers / take), users };
};
