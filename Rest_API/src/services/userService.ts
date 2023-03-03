import {DocumentDefinition,FilterQuery,UpdateQuery,QueryOptions} from 'mongoose';
import User,{userDocument} from "../model/userModel";
//Create new user service
export function createUser(input:DocumentDefinition<userDocument>)
{
    return User.create(input);
}
//Find one user service
export function findUser(
    query:FilterQuery<userDocument>,
    options:QueryOptions={learn:true})
{
    return User.findOne(query,{},options);
}
//Find one user and update service
export function findAndUpdate(
    query:FilterQuery<userDocument>,
    update:UpdateQuery<userDocument>,
    options:QueryOptions)
{
    return User.findOneAndUpdate(query,update,options)
}
//Delete one user services
export function deleteuser(query:FilterQuery<userDocument>)
{
    return User.deleteOne(query);
}
//Find all user list service
export function findU() 
{
    return User.find();
}