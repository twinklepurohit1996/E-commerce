import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
const SECRET_KEY = "NOTESAPI";
import fs from 'fs';

import { createContact, findContact, deleteContact, findAllContact } from '../services/contactService'

//Backend contactUs Contoller
const contactUs = async (req: Request, res: Response) => {
    console.log(req.body);
    // if (!req.body.email) {
    //     res.json({ "status": 400, "message": "Please fill the data properly!!!" });
    // }
    // else {
    //     console.log(req.body);
    //     const user = await findContact({ email: req.body.email, role: 'Administrator' });
    //     console.log(user)
    //     if (user) {
    //         const hash:any = user.password;
    //         var pass = await bcrypt.compare(req.body.password, hash)
    //         console.log(pass);
    //         if (pass) {
    //             const token = jwt.sign({ email: user.email, id: user._id }, SECRET_KEY);
    //             res.json({ "status": 200, "message": "Successfully logged In", data: user, token: token });
    //         }
    //     }
    //     else {
    //         res.json({ "status": 400, "message": "Please fill the data properly!!!" });
    //     }
    // }
}

// Backend registration Contoller
// const registration = async (req: Request, res: Response) => {
//     console.log(req.body);
//     if (!req.body || !req.file) {
//         res.json({ "status": 404, "message": "Please Fill the field Properly" });
//     }
//     else if (req.body.password != req.body.confirmPassword) {
//         res.json({ "status": 401, "message": "Please Match the password" });
//     }
//     else {
//         const { name,email, password, address, mob, xgen, city, dob, role } = req.body
//         const file = req.file.originalname;
//         const user = await findUser({ email: email });
//         if (user) {
//             res.json({ "status": 400, "message": "User Already Registered" });
//         }
//         else {
//             const salt = bcrypt.genSaltSync(10);
//             const hash = bcrypt.hashSync(password, salt);
//             const mydata = await createUser({
//                 email: email, password: hash, name: name,  mob: mob, xgen: xgen, address: address, role: role, file: file, dob: dob
//             });
//             res.json({ "status": 200, "message": "User is successfully registered!!" });
//         }
//     }
// }

// Backend User List Contoller
// const userList = async (req: Request, res: Response) => {

//     const user = await findU();
//     res.json({ "status": 200, "message": "*User List displayed successfully!!", data: user });
// }

// Backend Delete User Contoller
// const deleteUser = async (req: Request, res: Response) => {
//     const id = req.params.id;
//     const check = await findUser({ _id: id, role: 'Administrator' });
//     console.log(check);
//     if (!check) {
//         const user = await findUser({_id:id})
//         const dir = `./public/image/userImage/${user?.file}`;
//         let dirExist= fs.existsSync(dir)
//         if(dirExist){

//             fs.rmSync(dir)
//         }
//         const mydata = await deleteuser({ _id: id });
//         return res.json({ "status": 200, "message": "User is successfully deleted!!" });
//     }
//     return res.json({ "status": 401, "message": "Super Administrator you can't Delete" });

// };

//Backend Edit User Data Contoller to get Data
// const editUser = async (req: Request, res: Response) => {
//     const id = req.params.id;
//     const user = await findUser({ _id: id });
//     res.json({ "status": 200, "message": "User Data is Picked for Update", data: user });
// };

// Backend Update User Data Contoller to insert new data
// const updateUser = async (req: Request, res: Response) => {
//     const { email, password, name, mob, xgen, address, dob, role } = req.body
//     const file = req.file?.originalname;
//     const id = req.params.id;
//     const salt = bcrypt.genSaltSync(10);
//     const hash = bcrypt.hashSync(password, salt);
//     if(!req.body.password)
//     {
//         console.log("pass")
//         const user = await findAndUpdate({ _id: id }, {
//             email: email,  name: name, mob: mob, xgen: xgen, address: address, role: role, file: file, dob: dob
//         }, { new: true });
//         return res.json({ "status": 200, "message": "User Data is successfully Updated without password!!" });
//     }
//     else if(!file)
//     {
//         console.log("img")
//         const user = await findAndUpdate({ _id: id }, {
//             email: email,  name: name, mob: mob, xgen: xgen, address: address, role: role, password:hash, dob: dob
//         }, { new: true });
//         return res.json({ "status": 200, "message": "User Data is successfully Updated without image!!" });
//     }
//     else
//     {
//         console.log("both")
//         const userData = await findUser({_id:id})
//         const dir = `./public/image/userImage/${userData?.file}`;
//         let dirExist= fs.existsSync(dir)
//         console.log(req.file);
//         if(dirExist && req.file!==undefined){
//             console.log("HEllo")
//             fs.rmSync(dir)
//         }
//         const user = await findAndUpdate({ _id: id }, {
//             email: email, password: hash, name: name, mob: mob, xgen: xgen, address: address, role: role, file: file, dob: dob
//         }, { new: true });
//         return res.json({ "status": 200, "message": "User Data is successfully Updated!!" });
//     }
    

// };

//Backend User Profile Contoller (LoggedIn User)
// const userProfile = async (req: Request, res: Response) => {
//     const id = req.params.id;
//     const user = await findUser({ "_id": id });
//     return res.json({ "status": 200, "message": "User Infomation Get", data: user });
// }
export { contactUs }
