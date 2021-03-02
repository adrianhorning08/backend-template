import pg from "pg";
const Pool = pg.Pool;

const pool = new Pool({
  // user: process.env.USERNAME,
  // host: process.env.HOSTNAME,
  // database: process.env.DATABASE,
  // password: process.env.PASSWORD,
  // port: process.env.DB_PORT,
  connectionString: process.env.DATABASE_URL,
});

type queryArgs = {
  text: string;
  values?: Array<any>;
};

export function query(
  text: queryArgs,
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  params?: any
): Promise<pg.QueryResult<any>> {
  return pool.query(text, params);
}
