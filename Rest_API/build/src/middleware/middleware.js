"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const userService_1 = require("../services/userService");
const SECRET_KEY = "NOTESAPI";
const auth = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ')[1];
        // console.log(token);
        if (!token) {
            return res.json({ "status": 401, "message": "user not authorized" });
        }
        const decodedToken = jsonwebtoken_1.default.verify(token, SECRET_KEY);
        const id = decodedToken.id;
        const user = yield (0, userService_1.findUser)({ "id": id });
        if (!user) {
            return res.json({ "status": 401, "message": "user not authorized" });
        }
        next();
    }
    catch (err) {
        return res.json({ "status": 500, message: "Something went wrong!" });
    }
});
exports.default = auth;
