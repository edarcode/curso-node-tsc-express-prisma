import { z } from "zod";

export const schemaUuid = z.object({
  id: z.string().uuid(),
});
