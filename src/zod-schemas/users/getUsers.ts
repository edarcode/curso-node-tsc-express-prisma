import z from "zod";
import { NAME, ROLE, STATE } from "../../constants/optionOrderUsers";
import { OTHER, STUDENT, TEACHER } from "../../constants/roles";

const schema = z.object({
  page: z.coerce.number().min(1),
  take: z.coerce.number().min(1),
  name: z.string().min(1),
  username: z.string().min(6),
  state: z.enum(["true", "false"]).transform((item) => item === "true"),
  role: z.enum([STUDENT, TEACHER, OTHER]),
  order: z.enum([NAME, ROLE, STATE]),
});

export const schemaGetUsers = schema.partial();
