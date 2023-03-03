import {DocumentDefinition,FilterQuery,UpdateQuery,QueryOptions} from 'mongoose';
import Product,{productDocument} from "../model/productModel";
//Create new product service
export function createProduct(input:DocumentDefinition<productDocument>)
{
    return Product.create(input);
}
//Find one product service
export function findProduct(
    query:FilterQuery<productDocument>,
    options:QueryOptions={learn:true})
{
    return Product.findOne(query,{},options);
}
//Find one product and update service
export function findAndUpdate(
    query:FilterQuery<productDocument>,
    update:UpdateQuery<productDocument>,
    options:QueryOptions)
{
    return Product.findOneAndUpdate(query,update,options)
}
//Delete one product services
export function deletePro(query:FilterQuery<productDocument>)
{
    return Product.deleteOne(query);
}
//Find all product list service
export function findP() 
{
    return Product.find();
}