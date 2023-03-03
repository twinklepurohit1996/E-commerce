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
exports.userProfile = exports.updateUser = exports.editUser = exports.deleteUser = exports.userList = exports.registration = exports.login = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const SECRET_KEY = "NOTESAPI";
const fs_1 = __importDefault(require("fs"));
const userService_1 = require("../services/userService");
//Backend login Contoller
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.body.email) {
        res.json({ "status": 400, "message": "Please fill the data properly!!!" });
    }
    else {
        console.log(req.body);
        const user = yield (0, userService_1.findUser)({ email: req.body.email, role: 'Administrator' });
        console.log(user);
        if (user) {
            const hash = user.password;
            var pass = yield bcrypt_1.default.compare(req.body.password, hash);
            console.log(pass);
            if (pass) {
                const token = jsonwebtoken_1.default.sign({ email: user.email, id: user._id }, SECRET_KEY);
                res.json({ "status": 200, "message": "Successfully logged In", data: user, token: token });
            }
        }
        else {
            res.json({ "status": 400, "message": "Please fill the data properly!!!" });
        }
    }
});
exports.login = login;
// Backend registration Contoller
const registration = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // console.log(req.body);
    if (!req.body || !req.file) {
        res.json({ "status": 404, "message": "Please Fill the field Properly" });
    }
    else if (req.body.password != req.body.confirmPassword) {
        res.json({ "status": 401, "message": "Please Match the password" });
    }
    else {
        const { name, email, password, address, mob, xgen, city, dob, role } = req.body;
        const file = req.file.originalname;
        const user = yield (0, userService_1.findUser)({ email: email });
        if (user) {
            res.json({ "status": 400, "message": "User Already Registered" });
        }
        else {
            const salt = bcrypt_1.default.genSaltSync(10);
            const hash = bcrypt_1.default.hashSync(password, salt);
            const mydata = yield (0, userService_1.createUser)({
                email: email, password: hash, name: name, mob: mob, xgen: xgen, address: address, role: role, file: file, dob: dob
            });
            res.json({ "status": 200, "message": "User is successfully registered!!" });
        }
    }
});
exports.registration = registration;
// Backend User List Contoller
const userList = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield (0, userService_1.findU)();
    res.json({ "status": 200, "message": "*User List displayed successfully!!", data: user });
});
exports.userList = userList;
// Backend Delete User Contoller
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const check = yield (0, userService_1.findUser)({ _id: id, role: 'Administrator' });
    // console.log(check);
    if (!check) {
        const user = yield (0, userService_1.findUser)({ _id: id });
        const dir = `./public/image/userImage/${user === null || user === void 0 ? void 0 : user.file}`;
        let dirExist = fs_1.default.existsSync(dir);
        if (dirExist) {
            fs_1.default.rmSync(dir);
        }
        const mydata = yield (0, userService_1.deleteuser)({ _id: id });
        return res.json({ "status": 200, "message": "User is successfully deleted!!" });
    }
    return res.json({ "status": 401, "message": "Super Administrator you can't Delete" });
});
exports.deleteUser = deleteUser;
//Backend Edit User Data Contoller to get Data
const editUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const user = yield (0, userService_1.findUser)({ _id: id });
    res.json({ "status": 200, "message": "User Data is Picked for Update", data: user });
});
exports.editUser = editUser;
// Backend Update User Data Contoller to insert new data
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { email, password, name, mob, xgen, address, dob, role } = req.body;
    const file = (_a = req.file) === null || _a === void 0 ? void 0 : _a.originalname;
    const id = req.params.id;
    const salt = bcrypt_1.default.genSaltSync(10);
    const hash = bcrypt_1.default.hashSync(password, salt);
    if (!req.body.password) {
        console.log("pass");
        const user = yield (0, userService_1.findAndUpdate)({ _id: id }, {
            email: email, name: name, mob: mob, xgen: xgen, address: address, role: role, file: file, dob: dob
        }, { new: true });
        return res.json({ "status": 200, "message": "User Data is successfully Updated without password!!" });
    }
    else if (!file) {
        console.log("img");
        const user = yield (0, userService_1.findAndUpdate)({ _id: id }, {
            email: email, name: name, mob: mob, xgen: xgen, address: address, role: role, password: hash, dob: dob
        }, { new: true });
        return res.json({ "status": 200, "message": "User Data is successfully Updated without image!!" });
    }
    else {
        console.log("both");
        const userData = yield (0, userService_1.findUser)({ _id: id });
        const dir = `./public/image/userImage/${userData === null || userData === void 0 ? void 0 : userData.file}`;
        let dirExist = fs_1.default.existsSync(dir);
        console.log(req.file);
        if (dirExist && req.file !== undefined) {
            console.log("HEllo");
            fs_1.default.rmSync(dir);
        }
        const user = yield (0, userService_1.findAndUpdate)({ _id: id }, {
            email: email, password: hash, name: name, mob: mob, xgen: xgen, address: address, role: role, file: file, dob: dob
        }, { new: true });
        return res.json({ "status": 200, "message": "User Data is successfully Updated!!" });
    }
});
exports.updateUser = updateUser;
//Backend User Profile Contoller (LoggedIn User)
const userProfile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const user = yield (0, userService_1.findUser)({ "_id": id });
    return res.json({ "status": 200, "message": "User Infomation Get", data: user });
});
exports.userProfile = userProfile;
