import { Component, OnInit, ViewChild } from '@angular/core';
import { Icontact } from 'src/app/employeeInterface';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
})

export class ContactListComponent implements OnInit {
  
  public contacts:any = [];
  public curr_contact:any;
  public selected:boolean = false;

  constructor(private employeesService:EmployeesService) { }

  ngOnInit(): void {
    this.contacts = this.employeesService.getAddressBook();
  }

  onSelect(contact:Icontact, i:number) {
    this.curr_contact = contact;
    this.selected = true;
    var element = document.querySelectorAll('li');
    element.forEach(ele => {
      ele.classList.remove("active")
    });
    element[i].classList.add("active");
  }

  delete(id:number) {
    this.selected = false;
    this.employeesService.removeContact(id);
  }
}