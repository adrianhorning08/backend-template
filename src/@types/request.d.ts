import { IUser } from "../interfaces/IUser";

// declare namespace Express {
//   export interface Request {
//     user?: IUser;
//   }
// }

declare module "express-serve-static-core" {
  interface Request {
    user?: IUser;
  }
}
