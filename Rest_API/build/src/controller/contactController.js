"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactUs = void 0;
const SECRET_KEY = "NOTESAPI";
//Backend contactUs Contoller
const contactUs = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
});
exports.contactUs = contactUs;
