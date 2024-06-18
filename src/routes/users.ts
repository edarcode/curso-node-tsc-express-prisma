import { Router } from "express";
import { BODY, PARAMS, QUERY } from "../constants/typeDataReq";
import { createUser } from "../controllers/createUser";
import { deleteUser } from "../controllers/deleteUser";
import { getUserById } from "../controllers/getUserById";
import { getUsers } from "../controllers/getUsers";
import { updateUser } from "../controllers/updateUser";
import { normalizeData } from "../middlewares/normalizeData";
import { validateData } from "../middlewares/validateData";
import { normalizeReqQuery } from "../utils/normalizeReqQuery";
import { schemaCreateUser } from "../zod-schemas/createUser";
import { schemaGetUsers } from "../zod-schemas/getUsers";
import { schemaUpdateUser } from "../zod-schemas/updateUser";
import { schemaUuid } from "../zod-schemas/uuid";

export const usersRouter = Router();

const middlewares = [
  validateData(schemaGetUsers, QUERY),
  normalizeData(normalizeReqQuery),
];

const middlewares2 = [
  validateData(schemaUpdateUser, BODY),
  validateData(schemaUuid, PARAMS),
];

usersRouter.get("/", middlewares, getUsers);
usersRouter.get("/:id", validateData(schemaUuid, PARAMS), getUserById);
usersRouter.post("/", validateData(schemaCreateUser), createUser);
usersRouter.patch("/:id", middlewares2, updateUser);
usersRouter.delete("/:id", validateData(schemaUuid, PARAMS), deleteUser);
