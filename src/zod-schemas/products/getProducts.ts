import z from "zod";

const schema = z.object({
  size: z.coerce.number().positive(),
});

export const schemaGetProducts = schema.partial();
