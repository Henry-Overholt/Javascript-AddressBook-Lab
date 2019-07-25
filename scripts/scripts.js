class AddressBook {
  //named a class AddressBook
  constructor() {
    //a constructor with no parameters, because I want different about of information to pass through
    this.contacts = []; //this is an empty array because I want to add contacts to it later
  }
  addContacts(name, email, phone, relation) {
    //method to add contacts to our address book class, same parameters as our contact class
    this.contacts.unshift(new Contact(name, email, phone, relation)); //adds our new contact object into our addressbook class, by unshifting, as in sliding in the first spot
  }
  deleteContacts(name) {
    //method to remove contacts
    const index = this.contacts.findIndex(contact => {
      //findIndex to set the index of our contact equal to a variable to call in the removal inde number
      return contact.name === name; //findIndex gives you the index position we are returning if when the name is the same.
    });
    if (index >= 0) {
      //if index is is returned back equal or greater than 0 then execute the code, returns -1 if there is no match. so we don't want it to do anything if it is.
      this.contacts.splice(index, 1);
    }
  }
  printAddress() {
    for (let i = 0; i < this.contacts.length; i++) {
      //looped through writing out each piece, FOR LOOP
      console.log(this.contacts[i]);
    }
  }
}

class Contact {
  constructor(name, email, phone, relation) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.relation = relation;
  }
}

const addressBook = new AddressBook();

addressBook.addContacts("Henry", "henry@gmail.com", "555-555-5555", "Myself");
addressBook.addContacts("Dad", "dad@gmail.com", "444-444-4444", "Dad");
addressBook.addContacts(
  "Brother",
  "brother@gmail.com",
  "333-333-3333",
  "Brother"
);
addressBook.addContacts("Mom", "mom@gmail.com", "222-222-2222", "Brother");
addressBook.addContacts(
  "Sister",
  "sister@gmail.com",
  "111-111-1111",
  "Brother"
);
addressBook.addContacts(
  "Steve",
  "steve@gmail.com",
  "666-666-6666",
  "Uncle-in-law"
);
addressBook.printAddress();
addressBook.deleteContacts("Steve");
console.log("break");
addressBook.printAddress();
