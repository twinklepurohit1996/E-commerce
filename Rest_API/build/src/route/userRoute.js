"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = __importDefault(require("express"));
//multer used to upload userImage of registered user
const multer_1 = __importDefault(require("multer"));
var storage = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/image/userImage');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});
var upload = (0, multer_1.default)({ storage: storage });
const userController_1 = require("../controller/userController");
const userRoutes = express_1.default.Router();
exports.userRoutes = userRoutes;
//Backend login route
userRoutes.post('/login', userController_1.login);
// Backend registration route
userRoutes.post('/register', upload.single('file'), userController_1.registration);
// Backend User List route
userRoutes.get('/userList', userController_1.userList);
// Backend Delete User route
userRoutes.delete('/delUser/:id', userController_1.deleteUser);
//Backend Edit User Data route to get Data
userRoutes.get('/editUser/:id', userController_1.editUser);
// Backend Update User Data route to insert new data
userRoutes.put('/updateUser/:id', upload.single('file'), userController_1.updateUser);
//Backend LoggedIn user data display(UserProfile)
userRoutes.get('/userInfo/:id', userController_1.userProfile);
