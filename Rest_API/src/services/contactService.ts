import {DocumentDefinition,FilterQuery,UpdateQuery,QueryOptions} from 'mongoose';
import Contact,{contactDocument} from "../model/contactModel";
//Create new Contact service
export function createContact(input:DocumentDefinition<contactDocument>)
{
    return Contact.create(input);
}
//Find one Contact service
export function findContact(
    query:FilterQuery<contactDocument>,
    options:QueryOptions={learn:true})
{
    return Contact.findOne(query,{},options);
}
//Find one Contact and update service
export function findAndUpdateContact(
    query:FilterQuery<contactDocument>,
    update:UpdateQuery<contactDocument>,
    options:QueryOptions)
{
    return Contact.findOneAndUpdate(query,update,options)
}
//Delete one Contact services
export function deleteContact(query:FilterQuery<contactDocument>)
{
    return Contact.deleteOne(query);
}
//Find all Contact list service
export function findAllContact() 
{
    return Contact.find();
}