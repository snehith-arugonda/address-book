import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Icontact } from 'src/app/employeeInterface';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {

  contactToBeChanged:any;
  name: string = '';
  email: string = '';
  mobile: string = '';
  landline: string = '';
  website: string = '';
  address: string = '';
  error: string = "";
  
  public value:string = "ADD";
  private existing:boolean = false;

  constructor(private router: Router, private route:ActivatedRoute, private employeesService:EmployeesService) { 
    this.route.queryParams.subscribe(params => {
      this.contactToBeChanged = {
        e_Id: params["e_Id"],
        name: params["name"],
        email: params["email"],
        mobile: params["mobile"],
        landline: params["landline"],
        website: params["website"],
        address: params["address"]
      }
      if(this.contactToBeChanged.e_Id){
        this.preFillFormValues();
      }
    });
  }

  ngOnInit(): void {

  }

  preFillFormValues() {
    this.name = this.contactToBeChanged.name;
    this.email = this.contactToBeChanged.email;
    this.mobile = this.contactToBeChanged.mobile;
    this.landline = this.contactToBeChanged.mobile;
    this.website = this.contactToBeChanged.website;
    this.address = this.contactToBeChanged.address;
    this.value = "OKAY";
    this.existing = true;
  }

  onSubmit(form: NgForm) {
    if(form.form.valid) {
      if(!this.existing){
        let newContact : Icontact = {
          e_Id: Date.now(),
          name: this.name,
          email: this.email,
          mobile: this.mobile,
          landline: this.landline,
          website: this.website,
          address: this.address
        };
        this.employeesService.addContactToAddressBook(newContact);
      }
      else if(this.existing) {
        this.contactToBeChanged.name = this.name;
        this.contactToBeChanged.email = this.email;
        this.contactToBeChanged.mobile = this.mobile;
        this.contactToBeChanged.landline = this.landline;
        this.contactToBeChanged.website = this.website;
        this.contactToBeChanged.address = this.address;
        this.employeesService.changeContact(this.contactToBeChanged);
        this.value = "ADD";
        this.existing = false;
      }
      form.resetForm();
      this.router.navigate(["/home"]);
    }
    else {
      this.error = "fill all necessary details"
    }
  }
}