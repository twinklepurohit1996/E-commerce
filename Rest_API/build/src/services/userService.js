"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findU = exports.deleteuser = exports.findAndUpdate = exports.findUser = exports.createUser = void 0;
const userModel_1 = __importDefault(require("../model/userModel"));
//Create new user service
function createUser(input) {
    return userModel_1.default.create(input);
}
exports.createUser = createUser;
//Find one user service
function findUser(query, options = { learn: true }) {
    return userModel_1.default.findOne(query, {}, options);
}
exports.findUser = findUser;
//Find one user and update service
function findAndUpdate(query, update, options) {
    return userModel_1.default.findOneAndUpdate(query, update, options);
}
exports.findAndUpdate = findAndUpdate;
//Delete one user services
function deleteuser(query) {
    return userModel_1.default.deleteOne(query);
}
exports.deleteuser = deleteuser;
//Find all user list service
function findU() {
    return userModel_1.default.find();
}
exports.findU = findU;
