import { UpdateUser } from "../../../types/types";
import { connDb } from "../connDb";

export const updateUserDb = async (
  id: string,
  { name, username, state, role }: UpdateUser
) => {
  return await connDb.user.update({
    where: { id },
    data: { name, username, state, role },
  });
};
