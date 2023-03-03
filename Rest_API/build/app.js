"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("./src/config/db"));
const body_parser_1 = __importDefault(require("body-parser"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const swagger_1 = __importDefault(require("./swagger"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(express_1.default.static(path_1.default.join(__dirname, '/public')));
app.use(express_1.default.static(path_1.default.join(__dirname, '/node_modules/bootstrap/dist/')));
app.use(express_1.default.static(path_1.default.join(__dirname, '/node_modules/jquery/dist')));
app.use((0, cors_1.default)());
app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_1.default));
const userRoute_1 = require("./src/route/userRoute");
app.use('/', userRoute_1.userRoutes);
const categoriesRoute_1 = require("./src/route/categoriesRoute");
app.use('/categories', categoriesRoute_1.cateRoutes);
const productRoute_1 = require("./src/route/productRoute");
app.use('/products', productRoute_1.productRoutes);
app.use('/contact', productRoute_1.productRoutes);
(0, db_1.default)();
app.listen(PORT, () => { console.log(`server is running on ${PORT}`); });
