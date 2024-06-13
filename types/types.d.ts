import { NextFunction, Request, Response } from "express";

export type Req = Request;
export type Res = Response;
export type Next = NextFunction;
export type Uuid = `${string}-${string}-${string}-${string}-${string}`;
export type CreateUser = {
  name: string;
  state: boolean;
  role: string;
};
export type UpdateUser = Partial<CreateUser>;
