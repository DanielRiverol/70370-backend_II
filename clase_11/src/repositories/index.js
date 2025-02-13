import Contacts from "../DAOs/factory.js"

import ContactRepository from "./contacts.repository.js"

export const contactServices = new ContactRepository(new Contacts())