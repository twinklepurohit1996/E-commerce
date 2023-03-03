import { Request, Response } from 'express';
const SECRET_KEY = "NOTESAPI";
import fs from 'fs';

import { createProduct, findAndUpdate, findProduct, deletePro, findP } from '../services/productService'
import {  findC } from '../services/categoriesService'

// Backend Product Contoller
const addProduct = async (req: Request, res: Response) => {
    console.log("hello")
    console.log(req.body);
    if (!req.body || !req.file) {
        res.json({ "status": 404, "message": "Please Fill the field Properly" });
    }
    else {
        const { product_name,price, size, cate_Id, description } = req.body
        const file = req.file.originalname;
        const cate = await findProduct({ product_name: product_name });
        if (cate) {
            res.json({ "status": 400, "message": "Product Already Registered" });
        }
        else {
            const mydata = await createProduct({product_name: product_name,file: file,price:price,size:size,description:description,cate_Id:cate_Id});
            res.json({ "status": 200, "message": "Product is successfully Inserted!!" });
        }
    }
}

const cateDrop = async (req: Request, res: Response) => {
    const cate = await findC();
    res.json({ "status": 200, "message": "Data is successfully Get of Dropdown!!", data: cate });
}

const productShow = async (req: Request, res: Response) => {
    // console.log("Helllo");
    const productData = await findP().populate("cate_Id");
    res.json({ "status": 200, "message": "Data is successfully GET!!", data: productData });

}

//Edit Api of Item
const editProduct = async (req: Request, res: Response) => {
    const id = req.params.id;
    const item = await findProduct({ _id: id }).populate("cate_Id");
    res.json({ "status": 200, "message": "Edit Data is Picked for Update", data: item });
};

//Update Api of Item
const updateProduct = async (req: Request, res: Response) => {
    console.log(req.body);
    const id = req.params.id;
    const { product_name, description, price, size, cate_Id } = req.body;
    if (!req.file) {
        console.log("without image")
        const cate = await findAndUpdate({ _id: id }, { product_name: product_name, price: price, description: description, size: size, cate_Id: cate_Id }, { new: true });
        res.json({ "status": 200, "message": "Data is successfully without image Updated!!" });

    }
    else {
        console.log("image")

        const file = req.file?.originalname;
        const cate = await findAndUpdate({ _id: id },{ product_name: product_name, price: price, description: description, size: size, cate_Id: cate_Id,file:file }, { new: true });
        res.json({ "status": 200, "message": "Data is successfully with image Updated!!" });
    }

};
// Backend Categories List Contoller
// const cateList = async (req: Request, res: Response) => {

//     const cate = await findC();
//     res.json({ "status": 200, "message": "*Categories List displayed successfully!!", data: cate });
// }

// Backend Delete Categories Contoller
const deleteProduct = async (req: Request, res: Response) => {
    const id = req.params.id;
    // const check = await findProduct({ _id: id });
    // console.log(check);
    // if (!check) {
    //     const cate = await findProduct({_id:id})
    //     const dir = `./public/image/productImage/${cate?.file}`;
    //     let dirExist= fs.existsSync(dir)
    //     if(dirExist){

    //         fs.rmSync(dir)
    //     }
        const mydata = await deletePro({ _id: id });
        console.log(mydata);
        return res.json({ "status": 200, "message": "Product is successfully deleted!!" });
    // }
    // return res.json({ "status": 401, "message": "Super Administrator you can't Delete" });

};

//Backend Edit Categories Data Contoller to get Data
// const editCate = async (req: Request, res: Response) => {
//     const id = req.params.id;
//     const cate = await findCate({ _id: id });
//     res.json({ "status": 200, "message": "User Data is Picked for Update", data: cate });
// };

// Backend Update Categories Data Contoller to insert new data
// const updateCate = async (req: Request, res: Response) => {
//     const cate_name = req.body.cate_name
//     const file = req.file?.originalname;
//     const id = req.params.id;
//     if(!file){
//         console.log("img");
//         const cate = await findAndUpdate({ _id: id }, {
//             cate_name: cate_name
//         }, { new: true });
//         return res.json({ "status": 200, "message": "Categories Data is successfully Updated with out image!!" });
//     }
//     else
//     {
//         console.log("both");
//         const cateData = await findCate({_id:id})
//         const dir = `./public/image/cateImage/${cateData?.file}`;
//         let dirExist= fs.existsSync(dir)
//         if(dirExist){

//             fs.rmSync(dir)
//         }
//         const cate = await findAndUpdate({ _id: id }, {
//             cate_name: cate_name,  file: file
//         }, { new: true });
//         return res.json({ "status": 200, "message": "Categories Data is successfully Updated!!" });
//     }

// };


export { addProduct,cateDrop,productShow,editProduct,updateProduct,deleteProduct}
