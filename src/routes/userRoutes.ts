import { Express } from "express";
import { getAllUsers } from "../controllers/usersController";
// import { isAuthenticated } from "../middleware/isAuthenticated";

// TODO: comment this out
export const userRoutes = (app: Express): void => {
  // app.get("/users", isAuthenticated, getAllUsers);
  app.get("/users", getAllUsers);
};
