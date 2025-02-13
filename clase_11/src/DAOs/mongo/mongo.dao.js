import contactModel from  './model/contact.model.js'

export default class Contacts{
    constructor(){}
    get= async ()=>{
        return await contactModel.find()
    }
}