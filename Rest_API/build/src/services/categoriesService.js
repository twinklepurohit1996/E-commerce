"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findC = exports.deletecate = exports.findAndUpdate = exports.findCate = exports.createCate = void 0;
const categoriesModel_1 = __importDefault(require("../model/categoriesModel"));
//Create new cate service
function createCate(input) {
    return categoriesModel_1.default.create(input);
}
exports.createCate = createCate;
//Find one cate service
function findCate(query, options = { learn: true }) {
    return categoriesModel_1.default.findOne(query, {}, options);
}
exports.findCate = findCate;
//Find one cate and update service
function findAndUpdate(query, update, options) {
    return categoriesModel_1.default.findOneAndUpdate(query, update, options);
}
exports.findAndUpdate = findAndUpdate;
//Delete one cate services
function deletecate(query) {
    return categoriesModel_1.default.deleteOne(query);
}
exports.deletecate = deletecate;
//Find all cate list service
function findC() {
    return categoriesModel_1.default.find();
}
exports.findC = findC;
