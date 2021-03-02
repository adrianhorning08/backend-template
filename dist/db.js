"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.query = void 0;
const pg_1 = __importDefault(require("pg"));
const Pool = pg_1.default.Pool;
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});
function query(text, params) {
    return pool.query(text, params);
}
exports.query = query;
//# sourceMappingURL=db.js.map