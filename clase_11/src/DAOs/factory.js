import env from "../config/env.js";
import connectDB from "../database/db.js";
let Contacts;
switch (env.persistence) {
  case "MONGO":
    connectDB(env.mongodb_uri);
    const { default: ContactsMongo } = await import("./mongo/mongo.dao.js");
    Contacts = ContactsMongo;
    break;
  case "MEMORY":
    const { default: ContactsMemory } = await import("./memory/memory.dao.js");
    Contacts = ContactsMemory;
    break;
}
export default Contacts
