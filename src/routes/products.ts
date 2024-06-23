import { Router } from "express";
import { QUERY } from "../constants/typeDataReq";
import { getProducts } from "../controllers/products/getProducts";
import { validateData } from "../middlewares/validateData";
import { schemaGetProducts } from "../zod-schemas/products/getProducts";

export const productsRouter = Router();

productsRouter.get("/", validateData(schemaGetProducts, QUERY), getProducts);
