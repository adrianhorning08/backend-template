"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAuthenticated = void 0;
const isAuthenticated = (req, res, next) => {
    var _a;
    if ((_a = req.user) === null || _a === void 0 ? void 0 : _a.id) {
        return next();
    }
    return res.redirect("/");
};
exports.isAuthenticated = isAuthenticated;
//# sourceMappingURL=isAuthenticated.js.map