import z from "zod";
import { OTHER, STUDENT, TEACHER } from "../constants/roles";

const schema = z.object({
  page: z.string().min(1),
  take: z.string().min(1),
  name: z.string().min(1),
  state: z.enum(["true", "false"]),
  role: z.enum([STUDENT, TEACHER, OTHER]),
  order: z.enum(["name", "role", "state"]),
});

export const schemaGetUsers = schema.partial();
