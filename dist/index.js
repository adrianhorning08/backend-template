"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const cookie_session_1 = __importDefault(require("cookie-session"));
const userRoutes_1 = require("./routes/userRoutes");
const app = express_1.default();
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({
    extended: true,
}));
app.use(cookie_session_1.default({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [process.env.COOKIE_KEY],
}));
app.get("/", (_req, res) => {
    res.send("Hello World!");
});
userRoutes_1.userRoutes(app);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}.`);
});
//# sourceMappingURL=index.js.map