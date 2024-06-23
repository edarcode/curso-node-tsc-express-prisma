import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { notFound } from "./controllers/notFound";
import { productsRouter } from "./routes/products";
import { usersRouter } from "./routes/users";

dotenv.config();
export const app = express();

app.use(cors());
app.use(express.json());

app.use("/users", usersRouter);
app.use("/products", productsRouter);
app.use("*", notFound);
