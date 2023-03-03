"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findP = exports.deletePro = exports.findAndUpdate = exports.findProduct = exports.createProduct = void 0;
const productModel_1 = __importDefault(require("../model/productModel"));
//Create new product service
function createProduct(input) {
    return productModel_1.default.create(input);
}
exports.createProduct = createProduct;
//Find one product service
function findProduct(query, options = { learn: true }) {
    return productModel_1.default.findOne(query, {}, options);
}
exports.findProduct = findProduct;
//Find one product and update service
function findAndUpdate(query, update, options) {
    return productModel_1.default.findOneAndUpdate(query, update, options);
}
exports.findAndUpdate = findAndUpdate;
//Delete one product services
function deletePro(query) {
    return productModel_1.default.deleteOne(query);
}
exports.deletePro = deletePro;
//Find all product list service
function findP() {
    return productModel_1.default.find();
}
exports.findP = findP;
