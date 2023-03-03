import express from 'express';
import auth from '../middleware/middleware'
//multer used to upload cateImage of Categories
import multer from 'multer';
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/image/cateImage');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});
var upload = multer({ storage: storage });

import { addCategories,cateList,deleteCate, editCate, updateCate} from '../controller/categoriesContorller';

const cateRoutes = express.Router();

// Backend Add Categories route
cateRoutes.post('/addCate',auth, upload.single('file'), addCategories);

// Backend Categories List route
cateRoutes.get('/cateList',auth, cateList);

// Backend Delete Categories route
cateRoutes.delete('/delCate/:id',auth, deleteCate);

//Backend Edit Categories Data route to get Data
cateRoutes.get('/editCate/:id',auth, editCate);

// Backend Update Categories Data route to insert new data
cateRoutes.put('/updateCate/:id',auth, upload.single('file'), updateCate);

export { cateRoutes }