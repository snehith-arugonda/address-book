// import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
import { Icontact } from '../employeeInterface';
import { ContactsStorage, LocalStorage } from '../local-storage';

// const httpOptions = {
//   headers: new HttpHeaders({
//     'Content-Type': 'application/json',
//   }),
// };

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  private URL:string = "../../assets/data/contacts.json";

  constructor() { }

  getAddressBook(): Icontact[]{
    return ContactsStorage.AllContacts
  }

  addContactToAddressBook(contact: Icontact) {
    ContactsStorage.addItem(contact)
  }
  removeContact(id: number) {
    ContactsStorage.deleteItem(id);
  }
  changeContact(contact: Icontact) {
    ContactsStorage.updateItem(contact);
  }
}