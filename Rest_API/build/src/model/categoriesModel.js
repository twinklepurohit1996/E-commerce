"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const CateSchema = new mongoose_1.Schema({
    cate_name: {
        type: String,
        required: true
    },
    file: {
        type: String,
        required: true
    }
}, { timestamps: true });
const CateModel = (0, mongoose_1.model)('Cate', CateSchema);
exports.default = CateModel;
