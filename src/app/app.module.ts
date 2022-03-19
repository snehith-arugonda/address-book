import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { ContactInfoComponent } from './components/contact-info/contact-info.component';
import { EmployeesService } from './services/employees.service';
import { FormComponent } from './components/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContactListComponent,
    ContactInfoComponent,
    FormComponent,
    // rountingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // HttpClientModule,
    FormsModule
  ],
  providers: [EmployeesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
