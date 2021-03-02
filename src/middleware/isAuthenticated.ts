import { NextFunction, Response, Request } from "express";

export const isAuthenticated = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  if (req.user?.id) {
    return next();
  }
  return res.redirect("/");
};
