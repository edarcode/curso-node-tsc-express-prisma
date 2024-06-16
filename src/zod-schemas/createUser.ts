import z from "zod";
import { STUDENT, TEACHER } from "../constants/roles";

export const schemaCreateUser = z.object({
  name: z.string().min(1),
  state: z.boolean().optional(),
  role: z.enum([STUDENT, TEACHER]),
});
