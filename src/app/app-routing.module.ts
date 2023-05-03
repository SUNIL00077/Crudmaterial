import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StudentComponent } from './student/student.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'student',component:StudentComponent},
  {path:'update',component:UpdateComponent},

]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
