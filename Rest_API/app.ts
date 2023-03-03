import express from 'express';
import connects from './src/config/db';
import bodyParser from 'body-parser';
import path from 'path';
import cors from 'cors'
import swaggerDocs from './swagger';
import swaggerUI from 'swagger-ui-express';

const app = express();
const PORT =process.env.PORT  || 5000;
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.static(path.join(__dirname,'/node_modules/bootstrap/dist/')));
app.use(express.static(path.join(__dirname,'/node_modules/jquery/dist')));
app.use(cors());
app.use('/api-docs',swaggerUI.serve,swaggerUI.setup(swaggerDocs));


import {userRoutes} from './src/route/userRoute';
app.use('/',userRoutes);

import {cateRoutes} from './src/route/categoriesRoute';
app.use('/categories',cateRoutes);

import {productRoutes} from './src/route/productRoute';
app.use('/products',productRoutes);

import {contactRoutes} from './src/route/contactRoute';
app.use('/contact',productRoutes);

connects();
app.listen(PORT,():void=>{console.log(`server is running on ${PORT}`)});