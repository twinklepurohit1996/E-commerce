"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactRoutes = void 0;
const express_1 = __importDefault(require("express"));
const contactController_1 = require("../controller/contactController");
// import { login, registration,userList,deleteUser, editUser, updateUser, userProfile} from '../controller/userController';
const contactRoutes = express_1.default.Router();
exports.contactRoutes = contactRoutes;
//Backend login route
// userRoutes.post('/login', login);
// Backend registration route
contactRoutes.post('/contactUs', contactController_1.contactUs);
