declare namespace NodeJS {
  export interface ProcessEnv {
    DATABASE: string;
    USERNAME: string;
    PASSWORD: string;
    HOST: string;
    PORT: number;
    DB_PORT: number;
    DB_SSL: boolean;
    NODE_ENV: "development" | "production";
    GOOGLE_CLIENT_ID: string;
    GOOGLE_CLIENT_SECRET: string;
    DEV_CALLBACK_URL: string;
    COOKIE_KEY: string;
    DATABASE_URL: string;
  }
}
