import {
  QueryParsedGetProducts,
  ReqQueryParsed,
  Res,
} from "../../../types/types";
import { getProductsDb } from "../../db/product/getProductsDb";

export const getProducts = async (req: ReqQueryParsed, res: Res) => {
  const queryParsed = req.queryParsed as QueryParsedGetProducts;
  try {
    const products = await getProductsDb(queryParsed);
    res.json(products);
  } catch (error) {
    console.error(error);
  }
};
