"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ProductSchema = new mongoose_1.Schema({
    product_name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    size: {
        type: String,
        required: true
    },
    cate_Id: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Cate',
        required: true
    },
    file: {
        type: String,
        required: true
    }
}, { timestamps: true });
const ProductModel = (0, mongoose_1.model)('Product', ProductSchema);
exports.default = ProductModel;
