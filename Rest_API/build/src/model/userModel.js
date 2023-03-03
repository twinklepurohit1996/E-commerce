"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    mob: {
        type: Number,
        required: true
    },
    xgen: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['Customer', 'Vendor', 'Store Manager', 'Administrator'],
        default: 'Customer'
    },
    dob: {
        type: Date,
        required: true
    },
    file: {
        type: String,
        required: true
    }
}, { timestamps: true });
const UserModel = (0, mongoose_1.model)('User', UserSchema);
exports.default = UserModel;
