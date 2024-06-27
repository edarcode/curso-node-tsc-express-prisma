import { NextFunction, Request, Response } from "express";

export type Req = Request;
export type Res = Response;
export type Next = NextFunction;
export type Uuid = `${string}-${string}-${string}-${string}-${string}`;
export type CreateUser = {
  name: string;
  username: string;
  state: boolean;
  role: string;
};
export type UpdateUser = Partial<CreateUser>;

export type OrderUserBy = "name" | "role" | "state";

export interface ReqQueryParsed extends Req {
  queryParsed?: QueryParsedGetUsers | QueryParsedGetProducts;
}

export type QueryParsedGetUsers = {
  page?: number;
  take?: number;
  name?: string;
  username?: string;
  state?: boolean;
  role?: string;
  order?: OrderUserBy;
};

export type QueryParsedGetProducts = {
  size?: number;
};

export type TypeDataReq = "body" | "query" | "params";

export type ReqQuery = QueryString.ParsedQs;
