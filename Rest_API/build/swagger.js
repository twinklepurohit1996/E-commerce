"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'Shopping Zone API',
        version: '1.0.0',
        description: 'This is a REST API application made with Express.',
        license: {
            name: 'Licensed Under MIT',
            url: 'https://spdx.org/licenses/MIT.html',
        },
        contact: {
            name: 'Shopping Zone Admin Panel',
            url: 'http://localhost:4200/',
        },
    },
    servers: [
        {
            url: 'http://localhost:5000',
            description: 'Development server',
        },
    ],
};
const options = {
    swaggerDefinition,
    apis: ['./src/swagger/**.ts'],
};
const swaggerDocs = (0, swagger_jsdoc_1.default)(options);
exports.default = swaggerDocs;
