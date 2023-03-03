import {Schema,Document, model,Model} from "mongoose";

export interface userDocument extends Document{
    email:string,
    password?:string,
    name:string,
    mob:Number,
    xgen:string,
    address:string,
    token?:string,
    role?:string,
    file:String,
    dob?:Date,
}

interface User{
    email:string,
    password?:string,
    name:string,
    mob:Number,
    xgen:string,
    address:string,
    role?:string,
    token?:string,
    file:String,
    dob?:Date,
}


const UserSchema = new Schema<User>({
    email :{
        type : String,
        required :true
    },
    password :{
        type : String,
        required :true
    },
    name :{
        type : String,
        required :true
    },
    mob :{
        type : Number,
        required :true
    },
    xgen :{
        type: String,
        required:true
    },
    address :{
        type: String,
        required:true
    },
    role:{
        type:String,
        enum:['Customer','Vendor','Store Manager','Administrator'],
        default:'Customer'
    },
    dob :{
        type:   Date,
        required:true
    },
    file:{
        type:String,
        required:true
    }
},{timestamps : true});

const UserModel = model<User>('User',UserSchema);
export default UserModel;

