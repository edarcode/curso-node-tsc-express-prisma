import { CreateUser } from "../../../types/types";
import { connDb } from "../connDb";

export const createUserDb = async ({
  name,
  state = true,
  role,
}: CreateUser) => {
  return await connDb.user.create({
    data: { name, state, role },
  });
};
