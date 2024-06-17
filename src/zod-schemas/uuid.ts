import { z } from "zod";

export const schemaUuid = z.string().uuid();
