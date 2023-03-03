import {Schema,Document, model,Model} from "mongoose";
export interface cateDocument extends Document{
    cate_name:string,
    file:String
}
interface Cate{
    cate_name:String,
    file:String
}
const CateSchema = new Schema<Cate>({
    cate_name :{
        type : String,
        required :true
    },
    file:{
        type:String,
        required:true
    }
},{timestamps : true});
const CateModel = model<Cate>('Cate',CateSchema);
export default CateModel;

