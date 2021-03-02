import camelcaseKeys from "camelcase-keys";
import * as db from "../db";
import { IUser } from "../interfaces/IUser";

// mf -> snippet for new model function

const fetchAllUsers = async (): Promise<Array<IUser>> => {
  const query = {
    text: `
			SELECT *
			FROM users
			`,
  };
  try {
    const results = await db.query(query);
    return results.rows.map((user) => camelcaseKeys(user));
  } catch (error) {
    console.log("error in fetchAllUsers", error);
    return [];
  }
};

export { fetchAllUsers };
