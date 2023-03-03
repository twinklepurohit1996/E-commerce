"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cateRoutes = void 0;
const express_1 = __importDefault(require("express"));
const middleware_1 = __importDefault(require("../middleware/middleware"));
//multer used to upload cateImage of Categories
const multer_1 = __importDefault(require("multer"));
var storage = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/image/cateImage');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});
var upload = (0, multer_1.default)({ storage: storage });
const categoriesContorller_1 = require("../controller/categoriesContorller");
const cateRoutes = express_1.default.Router();
exports.cateRoutes = cateRoutes;
// Backend Add Categories route
cateRoutes.post('/addCate', middleware_1.default, upload.single('file'), categoriesContorller_1.addCategories);
// Backend Categories List route
cateRoutes.get('/cateList', middleware_1.default, categoriesContorller_1.cateList);
// Backend Delete Categories route
cateRoutes.delete('/delCate/:id', middleware_1.default, categoriesContorller_1.deleteCate);
//Backend Edit Categories Data route to get Data
cateRoutes.get('/editCate/:id', middleware_1.default, categoriesContorller_1.editCate);
// Backend Update Categories Data route to insert new data
cateRoutes.put('/updateCate/:id', middleware_1.default, upload.single('file'), categoriesContorller_1.updateCate);
