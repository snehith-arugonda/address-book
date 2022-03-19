import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Icontact } from 'src/app/employeeInterface';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css']
})
export class ContactInfoComponent implements OnInit {

  public e_id:number = 0;
  @Input() parentData: any;
  @Output() deleteContact = new EventEmitter();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onDelete(Id:number) {
    this.deleteContact.emit(Id);
  }
  onEdit(contact:Icontact) {
    let editContact : NavigationExtras = {
      queryParams:{
        e_Id: contact.e_Id,
        name: contact.name,
        email: contact.email,
        mobile: contact.mobile,
        landline: contact.landline,
        website: contact.website,
        address: contact.address
      }
    };
    this.router.navigate(["addContact"], editContact);
  }
}
