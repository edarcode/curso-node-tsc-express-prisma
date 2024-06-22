import { Router } from "express";
import { BODY, PARAMS, QUERY } from "../constants/typeDataReq";
import { createUser } from "../controllers/createUser";
import { deleteUser } from "../controllers/deleteUser";
import { getUserById } from "../controllers/getUserById";
import { getUsers } from "../controllers/getUsers";
import { updateUser } from "../controllers/updateUser";
import { validateData } from "../middlewares/validateData";
import { schemaCreateUser } from "../zod-schemas/createUser";
import { schemaGetUsers } from "../zod-schemas/getUsers";
import { schemaUpdateUser } from "../zod-schemas/updateUser";
import { schemaUuid } from "../zod-schemas/uuid";

export const usersRouter = Router();

const validateDataUpdateUser = [
  validateData(schemaUpdateUser, BODY),
  validateData(schemaUuid, PARAMS),
];

usersRouter.get("/", validateData(schemaGetUsers, QUERY), getUsers);
usersRouter.get("/:id", validateData(schemaUuid, PARAMS), getUserById);
usersRouter.post("/", validateData(schemaCreateUser), createUser);
usersRouter.patch("/:id", validateDataUpdateUser, updateUser);
usersRouter.delete("/:id", validateData(schemaUuid, PARAMS), deleteUser);
