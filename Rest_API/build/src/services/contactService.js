"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAllContact = exports.deleteContact = exports.findAndUpdateContact = exports.findContact = exports.createContact = void 0;
const contactModel_1 = __importDefault(require("../model/contactModel"));
//Create new Contact service
function createContact(input) {
    return contactModel_1.default.create(input);
}
exports.createContact = createContact;
//Find one Contact service
function findContact(query, options = { learn: true }) {
    return contactModel_1.default.findOne(query, {}, options);
}
exports.findContact = findContact;
//Find one Contact and update service
function findAndUpdateContact(query, update, options) {
    return contactModel_1.default.findOneAndUpdate(query, update, options);
}
exports.findAndUpdateContact = findAndUpdateContact;
//Delete one Contact services
function deleteContact(query) {
    return contactModel_1.default.deleteOne(query);
}
exports.deleteContact = deleteContact;
//Find all Contact list service
function findAllContact() {
    return contactModel_1.default.find();
}
exports.findAllContact = findAllContact;
