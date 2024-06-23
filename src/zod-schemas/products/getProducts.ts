import z from "zod";

const schema = z.object({
  size: z.number().positive(),
});

export const schemaGetProducts = schema.partial();
