import { UpdateUser } from "../../../types/types";
import { connDb } from "../connDb";

export const updateUserDb = async (
  id: string,
  { name, state, role }: UpdateUser
) => {
  return await connDb.user.update({
    where: { id },
    data: { name, state, role },
  });
};
