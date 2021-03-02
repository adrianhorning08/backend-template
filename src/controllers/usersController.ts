import { Request, Response } from "express";
import * as usersModel from "../models/usersModel";

// cf -> snippet for new controller function

const getAllUsers = async (_req: Request, res: Response): Promise<Response> => {
  try {
    const users = await usersModel.fetchAllUsers();
    return res.status(200).json({ users });
  } catch (error) {
    console.error("error in getAllUsers", error);
    return res.status(500).json({ error: "Failed to getAllUsers" });
  }
};

export { getAllUsers };
