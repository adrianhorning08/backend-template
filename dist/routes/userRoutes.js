"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const usersController_1 = require("../controllers/usersController");
const userRoutes = (app) => {
    app.get("/users", usersController_1.getAllUsers);
};
exports.userRoutes = userRoutes;
//# sourceMappingURL=userRoutes.js.map