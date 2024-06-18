import { connDb } from "../connDb";

export const getUserByIdDb = async (id: string) => {
  return await connDb.user.findFirst({ where: { id } });
};
