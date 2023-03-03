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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.updateProduct = exports.editProduct = exports.productShow = exports.cateDrop = exports.addProduct = void 0;
const SECRET_KEY = "NOTESAPI";
const productService_1 = require("../services/productService");
const categoriesService_1 = require("../services/categoriesService");
// Backend Product Contoller
const addProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("hello");
    console.log(req.body);
    if (!req.body || !req.file) {
        res.json({ "status": 404, "message": "Please Fill the field Properly" });
    }
    else {
        const { product_name, price, size, cate_Id, description } = req.body;
        const file = req.file.originalname;
        const cate = yield (0, productService_1.findProduct)({ product_name: product_name });
        if (cate) {
            res.json({ "status": 400, "message": "Product Already Registered" });
        }
        else {
            const mydata = yield (0, productService_1.createProduct)({ product_name: product_name, file: file, price: price, size: size, description: description, cate_Id: cate_Id });
            res.json({ "status": 200, "message": "Product is successfully Inserted!!" });
        }
    }
});
exports.addProduct = addProduct;
const cateDrop = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const cate = yield (0, categoriesService_1.findC)();
    res.json({ "status": 200, "message": "Data is successfully Get of Dropdown!!", data: cate });
});
exports.cateDrop = cateDrop;
const productShow = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // console.log("Helllo");
    const productData = yield (0, productService_1.findP)().populate("cate_Id");
    res.json({ "status": 200, "message": "Data is successfully GET!!", data: productData });
});
exports.productShow = productShow;
//Edit Api of Item
const editProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const item = yield (0, productService_1.findProduct)({ _id: id }).populate("cate_Id");
    res.json({ "status": 200, "message": "Edit Data is Picked for Update", data: item });
});
exports.editProduct = editProduct;
//Update Api of Item
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    console.log(req.body);
    const id = req.params.id;
    const { product_name, description, price, size, cate_Id } = req.body;
    if (!req.file) {
        console.log("without image");
        const cate = yield (0, productService_1.findAndUpdate)({ _id: id }, { product_name: product_name, price: price, description: description, size: size, cate_Id: cate_Id }, { new: true });
        res.json({ "status": 200, "message": "Data is successfully without image Updated!!" });
    }
    else {
        console.log("image");
        const file = (_a = req.file) === null || _a === void 0 ? void 0 : _a.originalname;
        const cate = yield (0, productService_1.findAndUpdate)({ _id: id }, { product_name: product_name, price: price, description: description, size: size, cate_Id: cate_Id, file: file }, { new: true });
        res.json({ "status": 200, "message": "Data is successfully with image Updated!!" });
    }
});
exports.updateProduct = updateProduct;
// Backend Categories List Contoller
// const cateList = async (req: Request, res: Response) => {
//     const cate = await findC();
//     res.json({ "status": 200, "message": "*Categories List displayed successfully!!", data: cate });
// }
// Backend Delete Categories Contoller
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    // const check = await findProduct({ _id: id });
    // console.log(check);
    // if (!check) {
    //     const cate = await findProduct({_id:id})
    //     const dir = `./public/image/productImage/${cate?.file}`;
    //     let dirExist= fs.existsSync(dir)
    //     if(dirExist){
    //         fs.rmSync(dir)
    //     }
    const mydata = yield (0, productService_1.deletePro)({ _id: id });
    console.log(mydata);
    return res.json({ "status": 200, "message": "Product is successfully deleted!!" });
    // }
    // return res.json({ "status": 401, "message": "Super Administrator you can't Delete" });
});
exports.deleteProduct = deleteProduct;
