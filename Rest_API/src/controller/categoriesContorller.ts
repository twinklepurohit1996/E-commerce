import { Request, Response } from 'express';
// import bcrypt from 'bcrypt';
// import jwt from 'jsonwebtoken';
const SECRET_KEY = "NOTESAPI";
import fs from 'fs';

import { createCate, findAndUpdate, findCate, deletecate, findC } from '../services/categoriesService'

// Backend Categories Contoller
const addCategories = async (req: Request, res: Response) => {
    console.log(req.body);
    if (!req.body || !req.file) {
        res.json({ "status": 404, "message": "Please Fill the field Properly" });
    }
    else {
        const  cate_name  = req.body.cate_name
        const file = req.file.originalname;
        const cate = await findCate({ cate_name: cate_name });
        if (cate) {
            res.json({ "status": 400, "message": "Categorie Already Registered" });
        }
        else {
            const mydata = await createCate({cate_name: cate_name,file: file});
            res.json({ "status": 200, "message": "Categories is successfully Inserted!!" });
        }
    }
}

// Backend Categories List Contoller
const cateList = async (req: Request, res: Response) => {

    const cate = await findC();
    res.json({ "status": 200, "message": "*Categories List displayed successfully!!", data: cate });
}

// Backend Delete Categories Contoller
const deleteCate = async (req: Request, res: Response) => {
    const id = req.params.id;
    // const check = await findCate({ _id: id });
    // console.log(check);
    // if (!check) {
        // const cate = await findCate({_id:id})
        // const dir = `./public/image/cateImage/${cate?.file}`;
        // let dirExist= fs.existsSync(dir)
        // if(dirExist){

        //     fs.rmSync(dir)
        // }
        const mydata = await deletecate({ _id: id });
        console.log(mydata);
        return res.json({ "status": 200, "message": "Categories is successfully deleted!!" });
    // }
    // return res.json({ "status": 401, "message": "Super Administrator you can't Delete" });

};

//Backend Edit Categories Data Contoller to get Data
const editCate = async (req: Request, res: Response) => {
    const id = req.params.id;
    const cate = await findCate({ _id: id });
    res.json({ "status": 200, "message": "User Data is Picked for Update", data: cate });
};

// Backend Update Categories Data Contoller to insert new data
const updateCate = async (req: Request, res: Response) => {
    const cate_name = req.body.cate_name
    const file = req.file?.originalname;
    const id = req.params.id;
    if(!file){
        console.log("img");
        const cate = await findAndUpdate({ _id: id }, {
            cate_name: cate_name
        }, { new: true });
        return res.json({ "status": 200, "message": "Categories Data is successfully Updated with out image!!" });
    }
    else
    {
        console.log("both");
        const cateData = await findCate({_id:id})
        const dir = `./public/image/cateImage/${cateData?.file}`;
        let dirExist= fs.existsSync(dir)
        if(dirExist){

            fs.rmSync(dir)
        }
        const cate = await findAndUpdate({ _id: id }, {
            cate_name: cate_name,  file: file
        }, { new: true });
        return res.json({ "status": 200, "message": "Categories Data is successfully Updated!!" });
    }

};


export { addCategories,cateList,deleteCate, editCate, updateCate}
