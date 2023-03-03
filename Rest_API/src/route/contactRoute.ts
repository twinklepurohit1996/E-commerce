import express from 'express';
import { contactUs } from '../controller/contactController';
// import { login, registration,userList,deleteUser, editUser, updateUser, userProfile} from '../controller/userController';
const contactRoutes = express.Router();

//Backend login route
// userRoutes.post('/login', login);

// Backend registration route
contactRoutes.post('/contactUs', contactUs);


// Backend User List route
// userRoutes.get('/userList', userList);

// Backend Delete User route
// userRoutes.delete('/delUser/:id', deleteUser);

//Backend Edit User Data route to get Data
// userRoutes.get('/editUser/:id', editUser);


// Backend Update User Data route to insert new data
// userRoutes.put('/updateUser/:id', upload.single('file'), updateUser);

//Backend LoggedIn user data display(UserProfile)
// userRoutes.get('/userInfo/:id', userProfile);
export { contactRoutes }