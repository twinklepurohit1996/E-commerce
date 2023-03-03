import {DocumentDefinition,FilterQuery,UpdateQuery,QueryOptions} from 'mongoose';
import Cate,{cateDocument} from "../model/categoriesModel";
//Create new cate service
export function createCate(input:DocumentDefinition<cateDocument>)
{
    return Cate.create(input);
}
//Find one cate service
export function findCate(
    query:FilterQuery<cateDocument>,
    options:QueryOptions={learn:true})
{
    return Cate.findOne(query,{},options);
}
//Find one cate and update service
export function findAndUpdate(
    query:FilterQuery<cateDocument>,
    update:UpdateQuery<cateDocument>,
    options:QueryOptions)
{
    return Cate.findOneAndUpdate(query,update,options)
}
//Delete one cate services
export function deletecate(query:FilterQuery<cateDocument>)
{
    return Cate.deleteOne(query);
}
//Find all cate list service
export function findC() 
{
    return Cate.find();
}