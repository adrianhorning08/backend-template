// Microsoft node App
// https://github.com/microsoft/TypeScript-Node-Starter/blob/f9408d0b38e97a221b77e18630c3c1b171640592/src/app.ts
import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
dotenv.config();
import cookieSession from "cookie-session";
import { userRoutes } from "./routes/userRoutes";

const app = express();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [process.env.COOKIE_KEY],
  })
);

app.get("/", (_req, res) => {
  res.send("Hello World!");
});

userRoutes(app);
// companiesRoutes(app);
// emailsRoutes(app);
// leadersRoutes(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}.`);
});
