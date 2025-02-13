export default class ContactDTO {
  constructor(contact) {
    this.name = contact.nombre;
    this.email = contact.correo;
    this.phone = contact.telefono ? contact.telefono.split("-").join("") : "";
  }
}
