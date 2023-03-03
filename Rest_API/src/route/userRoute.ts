import express from 'express';
//multer used to upload userImage of registered user
import multer from 'multer';
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/image/userImage');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});
var upload = multer({ storage: storage });
import { login, registration,userList,deleteUser, editUser, updateUser, userProfile} from '../controller/userController';
const userRoutes = express.Router();

//Backend login route
userRoutes.post('/login', login);

// Backend registration route
userRoutes.post('/register', upload.single('file'), registration);


// Backend User List route
userRoutes.get('/userList', userList);

// Backend Delete User route
userRoutes.delete('/delUser/:id', deleteUser);

//Backend Edit User Data route to get Data
userRoutes.get('/editUser/:id', editUser);


// Backend Update User Data route to insert new data
userRoutes.put('/updateUser/:id', upload.single('file'), updateUser);

//Backend LoggedIn user data display(UserProfile)
userRoutes.get('/userInfo/:id', userProfile);
export { userRoutes }