import { Router } from "express";
import { createUser } from "../controllers/createUser";
import { deleteUser } from "../controllers/deleteUser";
import { getUsers } from "../controllers/getUsers";
import { updateUser } from "../controllers/updateUser";
import { validateCreateUser } from "../middlewares/validateCreateUser";
import { validateUpdateUser } from "../middlewares/validateUpdateUser";

export const usersRouter = Router();

usersRouter.get("/", getUsers);
usersRouter.post("/", validateCreateUser, createUser);
usersRouter.patch("/:id", validateUpdateUser, updateUser);
usersRouter.delete("/:id", deleteUser);
