import { connDb } from "../connDb";

export const deleteUserDb = async (id: string) => {
  return await connDb.user.delete({
    where: { id },
  });
};
