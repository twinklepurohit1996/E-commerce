import express from 'express';
import auth from '../middleware/middleware';

//multer used to upload productImage of Product
import multer from 'multer';
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/image/productImage');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});
var upload = multer({ storage: storage });

import { addProduct,cateDrop,productShow,editProduct,updateProduct,deleteProduct} from '../controller/productController';

const productRoutes = express.Router();

// Backend Add Categories route
productRoutes.post('/addProduct',auth, upload.single('file'), addProduct);

productRoutes.get('/cateDrop',auth,cateDrop)
// Backend Categories List route
productRoutes.get('/productList', productShow);

// Backend Delete Categories route
productRoutes.delete('/delProduct/:id', auth,deleteProduct);

//Backend Edit Categories Data route to get Data
productRoutes.get('/editProduct/:id',auth, editProduct);

// Backend Update Categories Data route to insert new data
productRoutes.put('/updateProduct/:id',auth, upload.single('file'), updateProduct);

export { productRoutes }