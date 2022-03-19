import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { FormComponent } from './components/form/form.component';

const routes: Routes = [
  {path: 'addContact', component: FormComponent},
  {path: 'home', component: ContactListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }