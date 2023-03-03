"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
function connects() {
    return (0, mongoose_1.connect)("mongodb://0.0.0.0:27017/Shopping_Zone")
        .then(() => {
        console.log("db connected");
    }).catch((error) => {
        console.log(error);
    });
}
exports.default = connects;
