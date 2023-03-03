import {Schema,Document, model,Model} from "mongoose";
export interface contactDocument extends Document{
    cate_name:string,
    file:String
}
interface Contact{
    cate_name:String,
    file:String
}
const ContactSchema = new Schema<Contact>({
    cate_name :{
        type : String,
        required :true
    },
    file:{
        type:String,
        required:true
    }
},{timestamps : true});
const ContactModel = model<Contact>('Contact',ContactSchema);
export default ContactModel;

