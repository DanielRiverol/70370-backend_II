export default class Contacts {
  constructor() {
    this.data = [];
  }

  get = () => {
    return this.data;
  };
  post = (contact) => {
    this.data.push(contact);
    return contact;
  };
}
