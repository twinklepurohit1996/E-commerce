"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ContactSchema = new mongoose_1.Schema({
    cate_name: {
        type: String,
        required: true
    },
    file: {
        type: String,
        required: true
    }
}, { timestamps: true });
const ContactModel = (0, mongoose_1.model)('Contact', ContactSchema);
exports.default = ContactModel;
