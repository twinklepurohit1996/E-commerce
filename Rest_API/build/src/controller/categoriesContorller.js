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
exports.updateCate = exports.editCate = exports.deleteCate = exports.cateList = exports.addCategories = void 0;
// import bcrypt from 'bcrypt';
// import jwt from 'jsonwebtoken';
const SECRET_KEY = "NOTESAPI";
const fs_1 = __importDefault(require("fs"));
const categoriesService_1 = require("../services/categoriesService");
// Backend Categories Contoller
const addCategories = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    if (!req.body || !req.file) {
        res.json({ "status": 404, "message": "Please Fill the field Properly" });
    }
    else {
        const cate_name = req.body.cate_name;
        const file = req.file.originalname;
        const cate = yield (0, categoriesService_1.findCate)({ cate_name: cate_name });
        if (cate) {
            res.json({ "status": 400, "message": "Categorie Already Registered" });
        }
        else {
            const mydata = yield (0, categoriesService_1.createCate)({ cate_name: cate_name, file: file });
            res.json({ "status": 200, "message": "Categories is successfully Inserted!!" });
        }
    }
});
exports.addCategories = addCategories;
// Backend Categories List Contoller
const cateList = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const cate = yield (0, categoriesService_1.findC)();
    res.json({ "status": 200, "message": "*Categories List displayed successfully!!", data: cate });
});
exports.cateList = cateList;
// Backend Delete Categories Contoller
const deleteCate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    // const check = await findCate({ _id: id });
    // console.log(check);
    // if (!check) {
    // const cate = await findCate({_id:id})
    // const dir = `./public/image/cateImage/${cate?.file}`;
    // let dirExist= fs.existsSync(dir)
    // if(dirExist){
    //     fs.rmSync(dir)
    // }
    const mydata = yield (0, categoriesService_1.deletecate)({ _id: id });
    console.log(mydata);
    return res.json({ "status": 200, "message": "Categories is successfully deleted!!" });
    // }
    // return res.json({ "status": 401, "message": "Super Administrator you can't Delete" });
});
exports.deleteCate = deleteCate;
//Backend Edit Categories Data Contoller to get Data
const editCate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const cate = yield (0, categoriesService_1.findCate)({ _id: id });
    res.json({ "status": 200, "message": "User Data is Picked for Update", data: cate });
});
exports.editCate = editCate;
// Backend Update Categories Data Contoller to insert new data
const updateCate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const cate_name = req.body.cate_name;
    const file = (_a = req.file) === null || _a === void 0 ? void 0 : _a.originalname;
    const id = req.params.id;
    if (!file) {
        console.log("img");
        const cate = yield (0, categoriesService_1.findAndUpdate)({ _id: id }, {
            cate_name: cate_name
        }, { new: true });
        return res.json({ "status": 200, "message": "Categories Data is successfully Updated with out image!!" });
    }
    else {
        console.log("both");
        const cateData = yield (0, categoriesService_1.findCate)({ _id: id });
        const dir = `./public/image/cateImage/${cateData === null || cateData === void 0 ? void 0 : cateData.file}`;
        let dirExist = fs_1.default.existsSync(dir);
        if (dirExist) {
            fs_1.default.rmSync(dir);
        }
        const cate = yield (0, categoriesService_1.findAndUpdate)({ _id: id }, {
            cate_name: cate_name, file: file
        }, { new: true });
        return res.json({ "status": 200, "message": "Categories Data is successfully Updated!!" });
    }
});
exports.updateCate = updateCate;
