import {Schema,Document, model,Model, Mixed} from "mongoose";
export interface productDocument extends Document{
    product_name:string,
    description:String,
    price:String,
    size:String,
    cate_Id?:Mixed,
    file?:any
}
interface Product{
    product_name:string,
    description:String,
    price:String,
    size:String,
    cate_Id?:Mixed,
    file?:any
}
const ProductSchema = new Schema<Product>({
    product_name :{
        type : String,
        required :true
    },
    description:{
        type : String,
        required :true
    },
    price :{
        type : String,
        required :true
    },
    size :{
        type : String,
        required :true
    },
    cate_Id :{ 
        type: Schema.Types.ObjectId, 
        ref: 'Cate',
        required :true 
    },
    file:{
        type:String,
        required:true
    }
},{timestamps : true});
const ProductModel = model<Product>('Product',ProductSchema);
export default ProductModel;

