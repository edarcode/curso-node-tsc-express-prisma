import { PrismaClient } from "@prisma/client";

export const connDb = () => {
  console.log("connected database");
  return new PrismaClient();
};
